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
      <div className="Story-indicator-map">
        {[
          {ring: true, tail: false},
          {ring: false, tail: true},
          {ring: false, tail: true}
        ].map(attr =>
          <StoryIndicator ring={attr.ring} tail={attr.tail} />
        )}
      </div>
      <StoryRail cover={'https://images.gr-assets.com/books/1434493048l/22098550.jpg'} />
      <StoryWall />
    </div>
  );
};

export default StoryView;
