import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore, firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from "react-redux";

// components
import ListEntry from "./ListEntry";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(
    ({ firebase: { auth } }) => ({ auth }),
  ),
  firestoreConnect(({ auth }) => [
    {
      collection: 'booksList', where: ['bookFor', '==', auth.uid],
    },
  ]),
  connect(
    ({ firestore }) => ({
      booksList: firestore.ordered.booksList,
    })
  ) 
)

const Inbox = ({booksList}) => {
  return (
    <div className="Inbox">
      <div className="Inbox-header">Inbox</div>
      <div className="Inbox-list">
      {
        !isLoaded(booksList)
          ? ''
          : isEmpty(booksList)
            ? ''
            : booksList.map((book) =>
              <ListEntry key={book && book.id} book={book} />
              )
      }
      </div>
    </div>
  );
};

export default enhance(Inbox);
