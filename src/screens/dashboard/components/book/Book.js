import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, withProps } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  firestoreConnect(props => [
    {
      collection: "books",
      where: ["id", "==", props.id],
      limit: 1,
      storeAs: "currentBook"
    }
  ]),
  connect(({ firestore }) => ({
    currentBook: firestore.ordered.currentBook
  })),
  withProps(props => {
    return {
      dataBook: props.currentBook
    };
  })
);

const Book = props => {
  return (
    <div className="Book" style={{ backgroundColor: props.color }}>
      <div className="Book-content">
        {!isLoaded(props.dataBook)
          ? ""
          : isEmpty(props.dataBook)
          ? ""
          : props.dataBook.map(book => (
              <div className="Book-title">{book.title}</div>
            ))}
        {!isLoaded(props.dataBook)
          ? ""
          : isEmpty(props.dataBook)
          ? ""
          : props.currentBook.map(book => (
              <div className="Book-author">{book.author}</div>
            ))}
      </div>
      <div onClick={() => props.sendBook({})} className="Book-send">
        <i class="fas fa-paper-plane" />
      </div>
    </div>
  );
};

export default enhance(Book);
