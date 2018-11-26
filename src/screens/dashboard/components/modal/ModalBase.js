import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components

// css
import "../../../../stylesheets/css/base.css";

const ModalBase = props => {
  return (
    <div className="ModalBase">
      <div className="ModalBase-content">
        <div className="ModalBase-visuals" />
        <div className="ModalBase-header">Modal header message</div>
        {props.content}
      </div>
    </div>
  );
};

export default ModalBase;
