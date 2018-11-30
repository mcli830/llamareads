import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  branch,
  renderNothing
} from "recompose";
import { withFirestore, firestoreConnect, firebaseConnect } from "react-redux-firebase";
import Modal from "react-modal";


// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(({ view, dispatch }) => ({ view, dispatch })),
);

const BookCard = (props) => {
  return (
    <div className="BookCard">
      <div className="BookCard-cover">
        <img
          className="BookCard-cover-img"
          src={props.book.cover}
          alt=""
        />
      </div>
      <div className="BookCard-info">
        <div className="BookCard-title">
          Title: <span id="BookCard-title-name"> {props.book.title}</span>
        </div>
        <div className="BookCard-author">
          Author: <span id="BookCard-title-author"> {props.book.author}</span>
        </div>
        <div className="BookCard-description">
          {props.book.excerpt}
        </div>
        <button className="BookCard-details btn" onClick={()=>props.viewStory(props.book)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
