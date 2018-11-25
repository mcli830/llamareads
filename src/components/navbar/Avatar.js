import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../stylesheets/css/base.css";

const Avatar = props => {
  return <div className="Avatar" />;
};

export default Avatar;
