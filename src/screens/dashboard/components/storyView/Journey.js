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
    <div className="Journey-timeline">
      <div className="svg-container">
      {props.journey.length > 1 ?
        <svg
          className="Journey-timeline-svg"
          width="10"
          height="100%"
          viewBox="0 0 10 10"
          preserveAspectRatio="none">
          <path stroke="#484848"
                stroke-width="2"
                fill="none"
                d="M0 0 v10" />
            </svg>
            : ''
      }
      </div>
      <div className="JourneyNode-container">
        {console.log(props.journey)}
        {props.journey.map((node, index) => <JourneyNode key={index} node={node} />)}
      </div>
    </div>
  </div>
);

export default Journey;
