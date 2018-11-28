import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import {
  withHandlers,
  withStateHandlers,
  branch,
  renderNothing
} from "recompose";
import { withFirestore } from "react-redux-firebase";
import Modal from "react-modal";

// components
import ModalBase from "../modal/ModalBase";
import ReceiveModal from "../receiveModal/ReceiveModal";

const enhance = compose(withStateHandlers({}));

const ListEntry = (props) => {
  return (
    <div className="ListEntry">
      <div className="ListEntry-text">
        <div className="ListEntry-text-date">Nov 22 2018</div>
        <div className="ListEntry-text-message">
          sent you a book
        </div>
      </div>
      <div className="ListEntry-action">
        <button className="ListEntry-view-btn">
          <i className="far fa-eye" />
        </button>
      </div>
    </div>
  )
};

ListEntry.propTypes = {};

export default enhance(ListEntry);
