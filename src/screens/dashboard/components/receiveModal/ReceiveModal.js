import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookCard from "./BookCard";
import SenderNote from "./SenderNote";

// css
import "../../../../stylesheets/css/base.css";

const ReceiveModal = () => {
  return (
    <div className="ReceiveModal">
      <BookCard />
      <SenderNote />
      <div className="ReceiveModal-actions mbtn-container">
        <button className="mbtn mbtn-cancel">Later</button>
        <button className="mbtn mbtn-confirm">Accept</button>
      </div>
    </div>
  );
};

export default ReceiveModal;
