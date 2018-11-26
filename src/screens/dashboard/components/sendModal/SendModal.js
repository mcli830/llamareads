import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import SendForm from "./SendForm";
import ModalActions from "../modal/ModalActions";

// css
import "../../../../stylesheets/css/base.css";

const SendModal = () => {
  return (
    <div className="SendModal">
      <SendForm />
      <ModalActions />
    </div>
  );
};

export default SendModal;
