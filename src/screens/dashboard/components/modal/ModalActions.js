import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const ModalActions = () => {
  return (
    <div className="ReceiveModal-actions mbtn-container">
      <button className="mbtn mbtn-cancel">Later</button>
      <button className="mbtn mbtn-confirm">Accept</button>
    </div>
  );
};

export default ModalActions;
