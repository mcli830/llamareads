import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

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
    {props.view.story ? <Story /> : ""}
  </div>
)

export default enhance(StoryContainer);
