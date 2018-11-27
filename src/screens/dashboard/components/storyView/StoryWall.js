import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookCardInfo from "../book/BookCardInfo";

// css
import "../../../../stylesheets/css/base.css";

const StoryWall = props => {
  return (
    <div className="StoryWall">
      <div className="StoryWall-text">
        <div className="StoryWall-title">{props.book.title}</div>
        <div className="StoryWall-author">{props.book.author}</div>
        <div className="StoryWall-excerpt">{props.book.excerpt}</div>
      </div>
    </div>
  );
};

export default StoryWall;
