import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

//actions
import viewModal from "../../../../functions/actions/viewModal";
import viewStory from "../../../../functions/actions/viewStory";

// components
import BookCard from "./BookCard";
import SenderNote from "./SenderNote";
import ModalActions from "../modal/ModalActions";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(({view,dispatch}) => ({view,dispatch}))
)

const ReceiveModal = (props) => {
  return (
    <div className="ReceiveModal">
      <BookCard viewStory={()=>props.dispatch(viewStory(props.view.book, props.view.journey))} />
      <SenderNote />
      <ModalActions exit={()=>props.dispatch(viewModal())} />
    </div>
  );
};

export default enhance(ReceiveModal);
