import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const SendForm = ({book}) => {
  return (
    <div className="SendForm">
      <div className="SendForm-search">
        <input id="SendForm-search-input" />
      </div>
      <div className="SendForm-note">
        <textarea id="SendForm-note-input" />
      </div>
    </div>
  );
};

export default SendForm;
