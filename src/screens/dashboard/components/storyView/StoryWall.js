import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookCardInfo from "../book/BookCardInfo";
import Journey from "./Journey";

// css
import "../../../../stylesheets/css/base.css";

const StoryWall = props => {
  return (
    <div className="StoryWall">
      <div className="StoryWall-text">
        <div className="StoryWall-main-info">
          <div className="StoryWall-title">{props.book.title}</div>
          <div className="StoryWall-author">{props.book.author}</div>
        </div>
        <div className="StoryWall-excerpt">{props.book.excerpt}</div>
      </div>

      <div className="Journey-container">
        <div className="Journey-header">Journey</div>
        <Journey journey={{
            history: [
              { user: "Paul", note: "The journey begins.", avatar: 'https://source.unsplash.com/random/200x200' },
              { user: "Jordan", note: "Paul bought this one for me, and I think you could learn alot from it.", avatar: 'https://source.unsplash.com/random/200x200'},
            ],
            sentTo: ["Hide", "Doug"]
          }} />
        <div className="Journey-header">Impact</div>
        <div
          id="Journey-impact"
          className="Journey-impact"
        >
          <div className="Journey-impact-number">
            <div className="border-rotate" />
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryWall;
