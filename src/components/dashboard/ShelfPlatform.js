import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../stylesheets/css/base.css";

const ShelfPlatform = () => {
  return (
    <div className="ShelfPlatform">
      <div>ShelfPlatform</div>
    </div>
  );
};

export default ShelfPlatform;
