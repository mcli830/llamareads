import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// actions
import viewModal from "../../../../functions/actions/viewModal";

// components
import ModalBase from "./ModalBase"
import ReceiveModal from "../receiveModal/ReceiveModal";
import SendModal from "../sendModal/SendModal";
import AddModal from "../addModal/AddModal";

// css
import "../../../../stylesheets/css/base.css";

// redux

const enhance = compose(
  connect(({view, dispatch}) => ({view, dispatch}))
)

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.exitModal = this.exitModal.bind(this)
  }

  renderModal() {
    switch (this.props.view.modal) {
      case "add":
        return (
          <ModalBase
            exit={this.exitModal}
            content={<AddModal />}
            title="Add a book to your shelf"
          />
        );
      case "send":
        return (
          <ModalBase
            exit={this.exitModal}
            content={<SendModal />}
            title="Send"
          />
        );
      case "receive":
        return (
          <ModalBase
            exit={this.exitModal}
            content={<ReceiveModal />}
            title="Receive"
          />
        );
      default:
        return '';
    }
  }

  exitModal() {
    this.props.dispatch(viewModal(''));
  }

  render() {
    return (
      <div className="ModalContainer container-fixed">
        {this.renderModal()}
      </div>
    );
  }
}

export default enhance(ModalContainer);
