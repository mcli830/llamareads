import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const StoryIndicator = (props) => {
  return (
    <div className="StoryIndicator">
      {props.tail ? <div className="StoryIndicator-tail" /> : ""}
      {props.ring ? <div className="StoryIndicator-ring" /> : ""}
      <div className="StoryIndicator-text">{props.text}</div>
    </div>
  );
};

export default StoryIndicator;
