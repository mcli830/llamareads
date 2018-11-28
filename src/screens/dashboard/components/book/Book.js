import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, withProps } from "recompose";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

//actions
import viewModal from "../../../../functions/actions/viewModal";
import viewStory from "../../../../functions/actions/viewStory";

const enhance = compose(
  firestoreConnect(props => [
    {
      collection: "books",
      where: ["id", "==", props.bookId],
      limit: 1,
      storeAs: "currentBook"
    }
  ]),
  connect(({ firestore }) => ({
    currentBook: firestore.ordered.currentBook
  })),
  connect(({view, dispatch}) => ({view, dispatch})),
  withProps(props => {
    return {
      dataBook: props.currentBook
    };
  })
);

const Book = props => {
  return (
    <div
      className="Book"
      style={{ backgroundColor: props.color }}
      onClick={() => props.dispatch(viewStory(props.dataBook[0]))}>
      <div className="Book-content">
        {!isLoaded(props.dataBook)
          ? ""
          : isEmpty(props.dataBook)
          ? ""
          : <div className="Book-title">{props.dataBook[0].title}</div>}
        {!isLoaded(props.dataBook)
          ? ""
          : isEmpty(props.dataBook)
          ? ""
          : <div className="Book-author">{props.dataBook[0].author}</div>}
      </div>
      <div className="Book-send" onClick={(e) => {
          e.stopPropagation();
          props.dispatch(viewModal('send', props.dataBook[0]))
        }}
      >
        <i className="fas fa-paper-plane no-click" />
      </div>
    </div>
  );
};

export default enhance(Book);
