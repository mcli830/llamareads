import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const ModalActionsSend = () => {
  return (
    <div className="ReceiveModal-actions mbtn-container">
      <button className="mbtn mbtn-cancel">Cancel</button>
      <button className="mbtn mbtn-confirm">Send</button>
    </div>
  );
};

export default ModalActionsSend;
