import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components

// css
import "../../../../stylesheets/css/base.css";

const SenderNote = () => {
  return (
    <div className="SenderNote">
      <div className="SenderNote-text">
        <em>
          “Hey Sam, I really enjoyed this book. Hope you like it too!” - Jordan
        </em>
      </div>
    </div>
  );
};

export default SenderNote;
