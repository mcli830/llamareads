import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import ListEntry from './listentry';

const Inbox = (props) => {

  renderInbox = inbox => {
    return inbox.map(entry => (
      <ListEntry entry={entry} />
    ))
  }

  render() {
    return (
      <div className="Inbox">
        {this.renderInbox(this.props.inbox)}
      </div>
    )
  }
}
 
export default Inbox;