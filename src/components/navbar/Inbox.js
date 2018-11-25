import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

const Inbox = (props) => {

  renderInbox(inbox) {
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