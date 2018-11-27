import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, branch, renderNothing } from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";


// components
import BookSearchCard from "./BookSearchCard";

// css
import "../../../../stylesheets/css/base.css";


const enhance = compose(
  connect(
    ({ firebase: { auth } }) => ({ auth }),
  ),
  firestoreConnect(({ auth }) => [
    {
      collection: "books"
    },
  ]),
  withStateHandlers(
    ({ initialVal = "" }) => ({
      searchVal: initialVal
    }),
    {
      onSearchChange: ({ props }) => (e) => (
        firestoreConnect(({ auth }) => [
          {
            collection: "books", where: ['title', "==", e.target.value]
          },
        ])
      )
    }
  ),
  connect(
    ({ firestore }) => ({
      books: firestore.ordered.books,
    })
  ) 
)


const AddModal = ({firestore, onSearchChange, books}) => {
  return (
    <div className="AddModal">
      <div className="AddModal-search">
        <input onChange={onSearchChange} id="AddModal-search-input" className="AddModal-search-input" />
      </div>
      <span>Results</span>
      <div className="AddModal-search-list">
        {[1,2].map(i => (
          <BookSearchCard key={i} />
        ))}
      </div>
    </div>
  );
};

AddModal.propTypes = {
  books: PropTypes.array
}

export default enhance(AddModal);
