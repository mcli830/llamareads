import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing, withProps } from "recompose";
import {
  firestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { connect } from 'react-redux'

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  firestoreConnect((props) => [
    {
      collection: 'books',
      where: ["title", '==', "PAX"],
      storeAs: 'userBook'
    },
  ]),
  connect(({ firestore }) => ({
    userBook: firestore.ordered.books
  })),
)

const Book = (props, userBook) => {
  console.log(userBook)
  return (
    <div className="Book" style={{backgroundColor: props.color}}>
      {
        !isLoaded(userBook)
          ? ''
          : isEmpty(userBook)
            ? ''
            : userBook.map((book) =>
                <button value={book.title}/>
              )
      }
      <div className="Book-title">{props.id}</div>
      <div className="Book-author">{props.id}</div>
    </div>
  );
};

export default enhance(Book);
