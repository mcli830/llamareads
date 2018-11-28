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
      where: ["id", "==", props.book.book],
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

const Book = (props) => {
  return (
    <div
      className="Book"
      style={{ backgroundColor: props.color }}
      onClick={() => {
        props.showStory(true, props.book);
      }}
    >
      <div className="Book-content">

    { !isLoaded(props.currentBook)
      ? ""
        : isEmpty(props.currentBook)
        ? ""
          : <div className="Book-title">{props.currentBook.title}</div>
          }

    { !isLoaded(props.currentBook)
      ? ""
        : isEmpty(props.currentBook)
        ? ""
          : <div className="Book-author">{props.currentBook.author}</div>
          }
      </div>
      <div onClick={() => props.sendBook(props.dataBook)} className="Book-send">
        <i className="fas fa-paper-plane" />
      </div>
    </div>
  );
};

export default enhance(Book);
