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
      <div className="JourneyNode-user-container flex-center-single">
        <div className="JourneyNode-user">{props.node.user}</div>
      </div>
      <div className="JourneyNode-right-container">
        <div className="JourneyNode-avatar" />
        <div className="JourneyNode-note">
          <div className="JourneyNode-note-text">
            {props.node.note}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyNode;
