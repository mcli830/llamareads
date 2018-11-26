import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import Book from "./Book";

// css
import "../../../../stylesheets/css/base.css";

const BookList = () => {
  return (
    <div className="BookList">
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
