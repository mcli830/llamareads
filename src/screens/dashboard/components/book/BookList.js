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

// components
import Book from "./Book";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(
    ({ firebase: { auth } }) => ({ auth }),
  ),
  firestoreConnect(({ auth }) => [
    {
      collection: 'booksList', where: ['inbox', "==", false], where: ['bookFor', '==', auth.uid]
    },
  ]),
  connect(
    ({ firestore }) => ({
      booksList: firestore.ordered.booksList,
    })
  ) 
)

const BookList = ({firestore, booksList, auth}) => {
  return (
    <div className="BookList">
      {
        !isLoaded(booksList)
          ? ''
          : isEmpty(booksList)
            ? ''
            : booksList.map((book) =>
                <Book key={book && book.id} book={book} />
              )
      }
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array
}

export default enhance(BookList);
