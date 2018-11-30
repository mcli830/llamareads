import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// actions
import viewModal from "../../../../functions/actions/viewModal";

// components
import ModalBase from "./ModalBase";
import ModalBaseTitle from "./ModalBaseTitle";
import ReceiveModal from "../receiveModal/ReceiveModal";
import SendModal from "../sendModal/SendModal";
import AddModal from "../addModal/AddModal";

// css
import "../../../../stylesheets/css/base.css";
import { spawn } from "child_process";

// redux

const enhance = compose(connect(({ view, dispatch }) => ({ view, dispatch })));

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.exitModal = this.exitModal.bind(this);
  }

  renderModal() {
    switch (this.props.view.modal) {
      case "add":
        return (
          <ModalBase
            exit={this.exitModal}
            content={<AddModal exit={this.exitModal} />}
            title="Add a book to your shelf"
          />
        );
      case "send":
        return (
          <ModalBase
            exit={this.exitModal}
            content={<SendModal exit={this.exitModal} />}
            title={
              <ModalBaseTitle
                title={this.props.view.book.book.title}
                prefix=""
                prefix="Send "
                suffix=" to..."
              />
            }
          />
        );
      case "receive":
        return (
          <ModalBase
            exit={this.exitModal}
            content={<ReceiveModal exit={this.exitModal} />}
            title={
              <ModalBaseTitle
                title={this.props.view.book.title}
                prefix="Received "
                suffix=""
              />
            }
          />
        );
      default:
        return "";
    }
  }

  exitModal() {
    this.props.dispatch(viewModal(""));
  }

  render() {
    return (
      <div className="ModalContainer container-fixed">{this.renderModal()}</div>
    );
  }
}

export default enhance(ModalContainer);
