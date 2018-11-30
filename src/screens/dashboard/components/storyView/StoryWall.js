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
      collection: 'journey', where: ['idLink', '==', view.journey],
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
        {console.log(props.journeyTimeline)}
        { !isLoaded(props.journeyTimeline) 
          ? <div className="spinner-square" />
          : isEmpty(props.journeyTimeline)
          ? "This book is a ghost."
          : <Journey journey={props.journeyTimeline[0].timeline} />
        }
        {/* <div className="Journey-header">Impact</div>
        <div id="Journey-impact" className="Journey-impact"></div> */}
      </div>
    </div>
  );
};

export default enhance(StoryWall);
