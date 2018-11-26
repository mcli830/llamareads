import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const Book = () => {
  return (
    <div className="Book">
      <div className="Book-title">Pax</div>
      <div className="Book-author">Sara Pennypacker</div>
    </div>
  );
};

export default Book;
