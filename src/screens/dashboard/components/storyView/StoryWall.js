import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookCardInfo from "../book/BookCardInfo";

// css
import "../../../../stylesheets/css/base.css";

const StoryWall = () => {
  return (
    <div className="StoryWall">
      <div className="StoryWall-text">
        <BookCardInfo />
      </div>
    </div>
  );
};

export default StoryWall;
