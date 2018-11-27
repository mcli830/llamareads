import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const StoryRail = (props) => {
  return (
    <div className="StoryRail">
      <div className="StoryRail-rail"></div>
      <div className="StoryRail-cover" style={{backgroundImage: `url(${props.cover})`}}></div>
    </div>
  );
};

export default StoryRail;
