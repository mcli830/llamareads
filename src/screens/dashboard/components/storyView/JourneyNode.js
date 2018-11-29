import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const JourneyNode = (props) => {
  return (
    <div className="JourneyNode">
      <div className="JourneyNode-tail" />
      <div className="JourneyNode-avatar" />
      <div className="JourneyNode-username">{props.user}</div>
    </div>
  );
};

export default JourneyNode;
