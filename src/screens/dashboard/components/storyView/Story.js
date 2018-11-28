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

const Story = props => {
  return (
    <div className="StoryView">
      <div className="Story-indicator-map">
        {[
          { ring: true, tail: false },
          { ring: false, tail: true },
          { ring: false, tail: true }
        ].map(attr => (
          <StoryIndicator ring={attr.ring} tail={attr.tail} />
        ))}
      </div>
      <StoryRail cover={props.book.cover} />
      <StoryWall book={props.book} journey={props.journey} />
      <div className="Story-exit" onClick={props.exit} />
    </div>
  );
};

export default Story;
