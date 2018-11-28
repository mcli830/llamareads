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

const enhance = compose(
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(({ view, dispatch }) => ({ view, dispatch })),
  withState('note', 'writeNote', ''),
  withHandlers({
    sendBook: props => {
      props.firestore.add("inboxList", {
        sender: props.auth.uid,
        inboxFor: "WxvM1ZBzWrcBb4NGbFMNAB0l4NX2",
        book: props.view.book.book
      });
      props.firestore.add("journeyList", {
        sender: props.auth.uid,
        notes: props.note
      });
    },
    noteChange: props => event => {
      props.writeNote(event.target.value)
    }
  })
);


const SendModal = (props) => {
  return (
    <div className="SendModal">
      <div className="SendForm">
        <div className="SendForm-search">
          <input placeholder="Type in your friend’s name" id="SendForm-search-input" />
        </div>
        <div className="SendForm-note">
          {console.log(props.note)}
          <textarea placeholder="Add a short note" id="SendForm-note-input" value={props.note} onChange={(e)=>props.noteChange(e)} />
        </div>
      </div>
      <div className="ReceiveModal-actions mbtn-container">
      <button className="mbtn mbtn-cancel" onClick={()=>props.dispatch(viewModal())} >Cancel</button>
      <button className="mbtn mbtn-confirm" onClick={(e)=>{
          props.dispatch(viewModal());
        }}>Send</button>
    </div>
    </div>
  );
};

export default enhance(SendModal);
