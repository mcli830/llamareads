import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import ListEntry from "./ListEntry";

const Inbox = props => {
  return (
    <div className="Inbox">
      {this.props.inbox.map(entry => (
        <ListEntry entry={entry} />
      ))}
    </div>
  );
};

export default Inbox;
