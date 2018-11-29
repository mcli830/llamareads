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
  connect(({view, dispatch}) => ({view, dispatch})),
);

const Book = (props) => {
  return (
    <div
      className="Book"
      onClick={() => props.dispatch(viewStory(props.book))}>
      <div className="Book-cover" style={{backgroundImage: `url(${props.book.cover})`}}>
        <div className="Book-cover-overlay"></div>
      </div>
      <div className="Book-content">
        <div className="Book-title">{props.book.title}</div>
        <div className="Book-author">{props.book.author}</div>
      </div>
      <div className="Book-send" onClick={(e) => {
          e.stopPropagation();
          props.dispatch(viewModal('send',  props))
        }}
      >
        <i className="fas fa-paper-plane no-click" />
      </div>
    </div>
  );
};

export default enhance(Book);
