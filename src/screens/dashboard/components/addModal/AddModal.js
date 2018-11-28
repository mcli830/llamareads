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
      collection: "books",
      storeAs: 'addBooks'
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
      addBooks: firestore.ordered.addBooks,
    })
  )
)
function fetchApi(word){
  fetch('https://www.goodreads.com/search/index.xml?key=TfkFgljd4rldheKR1dWfZQ&q=PAX')
  .then(response => response.json())
  .then(data => this.setState({ data }));
} 

const AddModal = ({firestore, onSearchChange, books, addBooks, changeModal, exit}) => {
  return (
    <div className="AddModal">
      <div className="AddModal-search">
        <input placeholder="Type in bookname or author" onChange={onSearchChange} id="AddModal-search-input" className="AddModal-search-input" />
      </div>
      <span>Results</span>
      <div className="AddModal-search-list">
      {
        !isLoaded(addBooks)
          ? ''
          : isEmpty(addBooks)
            ? ''
            : addBooks.map((book) =>

          <BookSearchCard changeModal={changeModal} key={book.id} book={book} />
              )
      }
      </div>
    </div>
  );
};

AddModal.propTypes = {
  books: PropTypes.array
}

export default enhance(AddModal);
