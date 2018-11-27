import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const Journey = () => {
  return (
    <div className="Journey">
      <div className="Journey-header">Journey</div>
      <div className="Journey-timeline">
        <div className="Journey-timeline-path" />
        
      </div>
    </div>
  );
};

export default Journey;
