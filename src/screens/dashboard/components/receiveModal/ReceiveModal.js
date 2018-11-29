import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  withProps,
  withState,
  withPropsOnChange,
  mapProps
} from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";

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
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(({ view, dispatch }) => ({ view, dispatch })),
  withHandlers({
    receiveBook:  props => ({ auth }) =>
      props.firestore.update({ collection: 'userBooks', doc: props.view.book.id }, {inbox: false})
  })
);

const ReceiveModal = (props) => {
  return (
    <div className="ReceiveModal">
      <BookCard book={props.view.book.book} viewStory={()=>props.dispatch(viewStory(props.view.book.book, props.view.journey))} />
      <SenderNote book={props.view.book} />
      <div className="ReceiveModal-actions mbtn-container">
        <button className="mbtn mbtn-cancel" onClick={()=>props.dispatch(viewModal())} >Later</button>
        <button className="mbtn mbtn-confirm" onClick={(e)=>{
          if (props.note != "") {
            props.receiveBook(e);
            props.dispatch(viewModal());
          }
        }}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default enhance(ReceiveModal);
