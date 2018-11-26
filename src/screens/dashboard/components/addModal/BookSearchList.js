import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookSearchCard from "./BookSearchCard";

// css
import "../../../../stylesheets/css/base.css";

const BookSearchList = () => {
  return (
    <div className="BookSearchList">
      {[1, 2, 3, 4].map(i => (
        <BookSearchCard key={i} />
      ))}
    </div>
  );
};

export default BookSearchList;
