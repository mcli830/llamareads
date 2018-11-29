import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  branch,
  renderNothing
} from "recompose";
import { withFirestore, firestoreConnect, firebaseConnect } from "react-redux-firebase";
import Modal from "react-modal";

// components
import ModalBase from "../modal/ModalBase";
import ReceiveModal from "../receiveModal/ReceiveModal";

//actions
import viewModal from "../../../../functions/actions/viewModal";

const enhance = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(({ view, dispatch }) => ({ view, dispatch })),
);

const ListEntry = (props) => {
  return (
    <div className="ListEntry">
      <div className="ListEntry-text">
        <div className="ListEntry-text-date">DATE PLACEHOLDER</div>
        <div className="ListEntry-text-message">
          {props.inbox.senderName} sent you a book
        </div>
      </div>
      <div className="ListEntry-action">
        <button className="ListEntry-view-btn"
                onClick={() => props.dispatch(viewModal('receive', props.inbox.book, props.inbox.note))}
        >
                View
        </button>
      </div>
    </div>
  )
};

ListEntry.propTypes = {};

export default enhance(ListEntry);
