import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import ListEntry from "./ListEntry";

// css
import "../../stylesheets/css/base.css";

const Inbox = props => {
  return (
    <div className="Inbox">
      <div className="Inbox-header">Inbox</div>
      <div className="Inbox-list">
        <ListEntry />
      </div>
    </div>
  );
};

export default Inbox;
