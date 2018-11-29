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

      <div className="Journey-container" />
        <div className="Journey-header">Journey</div>
        <Journey journey={{
            history: [
              { user: "Paul", note: "Book created.", avatar: 'https://source.unsplash.com/random/200x200' },
              { user: "Jordan", note: "This book is great!", avatar: 'https://source.unsplash.com/random/200x200'},
              { user: "Mike", note: "Paul bought this one for me, and I think you could learn alot from it.", avatar: 'https://source.unsplash.com/random/200x200'},
              { user: "Sam", note: "This is probably the best book of the year!", avatar: 'https://source.unsplash.com/random/200x200'}
            ],
            sentTo: ["Hide", "Doug"],
            impact: 10
          }} />
        <div className="Journey-header">Impact</div>
      </div>
    </div>
  );
};

export default StoryWall;
