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
        Title: <strong>{book.title}</strong>
      </div>
      <div className="BookCard-author">
        Author: <strong>{book.author}</strong>
      </div>
      <div className="BookCard-description">
      {book.excerpt}
      </div>
    </div>
  );
};

export default BookCardInfo;
