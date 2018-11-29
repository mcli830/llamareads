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
  withState('receiver', 'changeReceiver', ''),
  withHandlers({
    sendBook: props => {
      props.firestore.add("userBooks", {
        sender: props.auth.uid,
        senderName: props.auth.displayName,
        inbox: true,
        book: props.view.book,
        user: props.receiver,
        note: props.note,
        sendDate: props.firestore.FieldValue.serverTimestamp()
      });
    },
    noteChange: props => event => {
      props.writeNote(event.target.value)
    },
    receiverChange: props => event => {
      props.changeReceiver(event.target.value)
    }
  })
);


const SendModal = (props) => {
  return (
    <div className="SendModal">
      <div className="SendForm">
        <div className="SendForm-search">
          <input id="send-friend-input" placeholder="Type in your friend’s name" id="SendForm-search-input" value={props.receiver} onChange={(e)=>props.receiverChange(e)} />
        </div>
        <div className="SendForm-note">
          <textarea id="send-note-input" placeholder="Add a short note" id="SendForm-note-input" value={props.note} onChange={(e)=>props.noteChange(e)} />
        </div>
      </div>
      <div className="ReceiveModal-actions mbtn-container">
        <button className="mbtn mbtn-cancel" onClick={()=>props.dispatch(viewModal())} >Cancel</button>
        <button className="mbtn mbtn-confirm" onClick={(e)=>{
          if (props.note != "") {
            props.sendBook();
            props.dispatch(viewModal());
          }
        }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default enhance(SendModal);
