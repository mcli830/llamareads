import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// components
import Book from "./Book";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [
    {
      collection: "booksList",
      where: ["bookFor", "==", auth.uid],
      storeAs: "userBooks"
    }
  ]),
  connect(({ firestore }) => ({
    userBooks: firestore.ordered.userBooks
  }))
);

const BookList = ({ firestore, userBooks, auth, changeModal, sendBook }) => {
  return (
    <div className="BookList">
      {!isLoaded(userBooks)
        ? ""
        : isEmpty(userBooks)
        ? ""
        : userBooks.map(book => (
            <Book
              key={book.id}
              id={book.book}
              color={`hsl(${Math.floor(Math.random() * 360 + 1)},70%,70%)`}
              changeModal={changeModal}
              sendBook={sendBook}
            />
          ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array
};

export default enhance(BookList);
