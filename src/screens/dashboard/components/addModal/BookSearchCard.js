import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  withProps,
  withPropsOnChange,
  mapProps
} from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

// component
import BookCardInfo from "../book/BookCardInfo";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  withHandlers({
    addBook: props => ({ auth }) =>
      props.firestore.add("booksList", {
        bookFor: props.auth.uid,
        book: props.book.id
      })
  })
);

const BookSearchCard = (props) => {
  return (
    <div className="BookSearchCard">
      <div className="BookSearchCard-cover">
        <img
          className="BookCard-cover-img"
          src="https://images.gr-assets.com/books/1409595968l/929.jpg"
          alt=""
        />
      </div>
      <div className="BookSearchCard-info">
        <BookCardInfo book={props.book} />
      </div>
      <div className="BookSearchCard-actions">
        <button className="mbtn mbtn-confirm BookSearchCard-add" onClick={props.addBook}>Add</button>
        <button className="BookCard-details btn">Details</button>
      </div>
    </div>
  );
};

export default enhance(BookSearchCard);
