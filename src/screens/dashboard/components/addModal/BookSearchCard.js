import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, withStateHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// component
import BookCardInfo from "../book/BookCardInfo";

// css
import "../../../../stylesheets/css/base.css";

const BookSearchCard = () => {
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
        <BookCardInfo />
      </div>
      <div className="BookSearchCard-actions">
        <button className="mbtn mbtn-confirm BookSearchCard-add">Add</button>
        <button className="BookCard-details btn">Details</button>
      </div>
    </div>
  );
};

export default BookSearchCard;
