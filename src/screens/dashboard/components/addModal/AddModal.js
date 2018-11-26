import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookSearchCard from "./BookSearchCard";

// css
import "../../../../stylesheets/css/base.css";

const AddModal = props => {
  return (
    <div className="AddModal">
      <div className="AddModal-search">
        <input id="AddModal-search-input" className="AddModal-search-input" />
      </div>
      <span>Results</span>
      <div className="AddModal-search-list">
        {[1, 2].map(i => (
          <BookSearchCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default AddModal;
