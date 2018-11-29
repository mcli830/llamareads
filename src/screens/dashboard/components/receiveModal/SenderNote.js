import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components

// css
import "../../../../stylesheets/css/base.css";

const SenderNote = (props) => {
  return (
    <div className="SenderNote">
      <div className="SenderNote-text">
        <em>
          {props.book.note}
        </em>
      </div>
    </div>
  );
};

export default SenderNote;
