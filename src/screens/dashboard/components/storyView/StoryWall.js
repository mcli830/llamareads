import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore, firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";

// components
import BookCardInfo from "../book/BookCardInfo";
import Journey from "./Journey";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(({view, dispatch}) => ({view, dispatch})),
  firestoreConnect(({ view }) => [
    {
      collection: 'journey', where: ['id', '==', view.journey],
      storeAs: 'journeyTimeline'
    }
  ]),
  connect(
    ({ firestore }) => ({
      journeyTimeline: firestore.ordered.journeyTimeline,
    })
  ),
  connect(({ firebase: { auth } }) => ({ auth })),
);

const StoryWall = (props)  => {
  return (
    <div className="StoryWall">
      <div className="StoryWall-text">
        <div className="StoryWall-main-info">
          <div className="StoryWall-title">{props.book.title}</div>
          <div className="StoryWall-author">{props.book.author}</div>
        </div>
        <div className="StoryWall-excerpt">{props.book.excerpt}</div>
      </div>

      <div id="journey" className="Journey-container">
        <div className="Journey-header">Book's Journey</div>
        {/* !isLoaded(props.journeyTimeline)
          ? <div className="spinner-square" />
          : isEmpty(props.journeyTimeline)
          ? "This book is a ghost."
          : <Journey journey={props.journeyTimeline[0].timeline} />
        */}
        <Journey journey={[
          {
            user: 'Paul',
            date: new Date('Oct 24 2018'),
            picture: 'https://avatars3.githubusercontent.com/u/17173804?s=400&v=4',
            note: "Je pense que tu ce livre t'aidera dans ton projet."
          },
          {
            user: 'Jordan',
            date: new Date('Nov 30 2018'),
            picture: 'https://avatars3.githubusercontent.com/u/41472382?s=460&v=4',
            note: "This will help you to build an intuitive product, give it a try and perhaps we can talk over coffee sometimes :wink:"
          }
        ]} />
        {/* <div className="Journey-header">Impact</div>
        <div id="Journey-impact" className="Journey-impact"></div> */}
      </div>
    </div>
  );
};

export default enhance(StoryWall);
