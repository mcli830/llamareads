import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStateHandlers, branch, renderNothing, withState } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const ShelfHeader = (props) => {
  return (
    <div className="ShelfHeader">
      <div className="Shelf-name">My Books</div>
    </div>
  );
};

export default ShelfHeader;
