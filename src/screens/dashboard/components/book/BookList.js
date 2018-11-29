import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// components
import Book from "./Book";
import BookPlaceholder from "./BookPlaceholder"

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [
    {
      collection: 'userBooks',
      where: [
        ['inbox', '==', false],
        ['user', '==', auth.uid]
      ]
    }
  ]),
  connect(({ firestore }) => ({
    userBooks: firestore.ordered.userBooks
  })),
  connect(({dispatch}) => ({dispatch}))
);

const BookList = (props) => (
  <div className="BookList">
      { !isLoaded(props.userBooks)
      ? ""
        : isEmpty(props.userBooks)
        ? ""
          : console.log(props.userBooks.length)
          }
    { !isLoaded(props.userBooks)
      ? ""
        : isEmpty(props.userBooks)
        ? ""
          : props.userBooks.map(book => (
            <Book
              key={book.id}
              book={book.book}
              journey={book.journey}
            />
          ))}
  </div>
)

export default enhance(BookList);
