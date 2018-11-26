import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import StoryRail from "./StoryRail";
import StoryIndicator from "./StoryIndicator";
import StoryWall from "./StoryWall";

// css
import "../../../../stylesheets/css/base.css";

const StoryView = () => {
  return (
    <div className="StoryView">
      <StoryIndicator />
      <StoryRail />
      <StoryWall />
    </div>
  );
};

export default StoryView;
