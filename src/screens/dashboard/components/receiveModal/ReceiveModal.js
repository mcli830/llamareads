import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import BookCard from "./BookCard";
import SenderNote from "./SenderNote";
import ModalActions from "../modal/ModalActions";

// css
import "../../../../stylesheets/css/base.css";

const ReceiveModal = ({ showStory }) => {
  return (
    <div className="ReceiveModal">
      <BookCard showStory={showStory} />
      <SenderNote />
      <ModalActions />
    </div>
  );
};

export default ReceiveModal;
