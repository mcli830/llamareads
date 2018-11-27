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

const ListEntry = ({ changeModal }) => {
  return (
    //   <div>
    //   <button onClick={this.openModal}>Open Modal</button>
    //   <Modal
    //     isOpen={this.state.modalIsOpen}
    //     onAfterOpen={this.afterOpenModal}
    //     onRequestClose={this.closeModal}
    //     style={customStyles}
    //     contentLabel="Example Modal"
    //   >

    //     <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
    //     <button onClick={this.closeModal}>close</button>
    //     <div>I am a modal</div>
    //     <form>
    //       <input />
    //       <button>tab navigation</button>
    //       <button>stays</button>
    //       <button>inside</button>
    //       <button>the modal</button>
    //     </form>
    //   </Modal>
    // </div>
    <div className="ListEntry">
      <div className="ListEntry-text">
        <div>Nov 22 2018</div>
        <div>{/* sender */} sent you a book</div>
      </div>
      <div className="ListEntry-action">
        <button onClick={() => changeModal("receive")}>View</button>
      </div>
    </div>
  );
};

ListEntry.propTypes = {};

export default enhance(ListEntry);
