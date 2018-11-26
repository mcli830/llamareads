import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const Book = ({ book }) => {
  return (
    <div className="Book">
      <div className="Book-title">{book.title}</div>
      <div className="Book-author">{book.author}</div>
    </div>
  );
};

export default Book;
