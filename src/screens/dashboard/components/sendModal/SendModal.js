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

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}


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
        sendDate: props.firestore.FieldValue.serverTimestamp(),
        journeyBook: {sender: props.auth.displayName, note: props.note}
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
  console.log(props)
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
