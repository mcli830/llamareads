import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers } from 'recompose'
import {
  firestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  firestoreConnect((props) => [
    {
      collection: 'books',
      where: ['id', '==', 'Pax'],
      storeAs: 'currentBook'
    },
  ]),
  connect(
    ({ firestore }) => ({
      currentBook: firestore.ordered.currentBook,
    })
  ) 
)

const Book = ({currentBook}) => {
  return (
    <div className="Book">
      {
        !isLoaded(currentBook)
          ? console.log("LOAD")
          : isEmpty(currentBook)
            ? console.log("empty")
            : currentBook.map((book) =>
            <div className="Book-title">{book.title}</div>
          )
      }
      {
        !isLoaded(currentBook)
          ? console.log("LOAD")
          : isEmpty(currentBook)
            ? console.log("empty")
            : currentBook.map((book) =>
            <div className="Book-author">{book.author}</div>
          )
      }
    </div>
  );
};

export default enhance(Book);
