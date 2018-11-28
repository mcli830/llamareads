import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import JourneyNode from "./JourneyNode";

// css
import "../../../../stylesheets/css/base.css";

const Journey = (props) => (
  <div className="Journey">
    {props.journey.history.map((node, index) => <JourneyNode key={index} node={node} />)}
    <JourneyNode node={props.journey.here} />
    <div
      id="Journey-impact"
      className="Journey-impact"
      data-impact={props.journey.impact}
    />
  </div>
);

export default Journey;
