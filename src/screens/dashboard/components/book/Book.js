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
      where: ['id', '==', props.id],
      limit: 1,
      storeAs: 'currentBook'
    },
  ]),
  connect(
    ({ firestore }) => ({
      currentBook: firestore.ordered.currentBook,
    })
  ) 
)

const Book = (props) => {
  return (
    <div className="Book" style={{backgroundColor: props.color}}>
      <div className="Book-content">
        {
          !isLoaded(props.currentBook)
            ? ''
            : isEmpty(props.currentBook)
            ? ''
              : props.currentBook.map((book) =>
              <div className="Book-title">{book.title}</div>
            )
        }
        {
          !isLoaded(props.currentBook)
          ? ''
            : isEmpty(props.currentBook)
            ? ''
              : props.currentBook.map((book) =>
              <div className="Book-author">{book.author}</div>
            )
        }
      </div>
    </div>
  );
};

export default enhance(Book);
