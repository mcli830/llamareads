import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const BookCardInfo = ({book}) => {
  return (
    <div className="BookCardInfo">
      <div className="BookCard-title">
        <p>{book.title}</p>
      </div>
      <div className="BookCard-author">
        <p>{book.author}</p>
      </div>
      <div className="BookCard-description">
      {book.excerpt}
      </div>
    </div>
  );
};

export default BookCardInfo;
