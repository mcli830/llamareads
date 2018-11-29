import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

//actions
import viewStory from "../../../../functions/actions/viewStory";

// components
import Story from "./Story";

// css
import "../../../../stylesheets/css/base.css";

// compose

const enhance = compose(
  connect(({view, dispatch}) => ({view, dispatch}))
)

const StoryContainer = props => (
  <div className="StoryContainer container-fixed">
    {props.view.story ? <Story book={props.view.book} journey={props.view.journey} exit={()=>props.dispatch(viewStory())} /> : ""}
  </div>
)

export default enhance(StoryContainer);
