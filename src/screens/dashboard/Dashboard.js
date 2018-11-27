import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withHandlers,
  withStateHandlers,
  withProps,
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

import firebase from 'firebase';

// components
import Navbar from "./components/navbar/Navbar";
import ShelfList from "./components/shelf/ShelfList";
import ModalBase from "./components/modal/ModalBase";
import ReceiveModal from "./components/receiveModal/ReceiveModal";
import SendModal from "./components/sendModal/SendModal";
import AddModal from "./components/addModal/AddModal";
import StoryView from "./components/storyView/StoryView";

// css
import "../../stylesheets/css/base.css";
import Login from "../identity/Login";

function setModal(newState){
  console.log(newState);
}

const enhance = compose(
  withProps({
    modal: ""
  }),
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  withHandlers({
    addBook: props => ({ auth }) =>
      props.firestore.add("booksList", {
        bookFor: props.auth.uid,
        book: "9xzHVb6LM4Cq67XUHFRF"
      }),
    sendBook: props => e => {
      props.firestore.add("inboxList", {
        sender: props.auth.uid,
        inboxFor: e.target.value,
        book: "9xzHVb6LM4Cq67XUHFRF"
      });
      props.firestore.add("journeyList", {
        sender: props.auth.uid,
        notes: "This is a note"
      });
    }
  }),
  firestoreConnect(({ auth }) => [
    {
      collection: "users"
    }
  ]),
  connect(({ firestore }) => ({
    users: firestore.ordered.users
  })),
  withStateHandlers(
    ({ initialVal = "" }) => ({
      searchVal: initialVal
    }),
    {
      onSearchChange: ({ props }) => e => ({ searchVal: e.target.value })
    }
  )
);

const DashboardContainer = ({ users, addBook, onSearchChange, searchVal, sendBook }) => (
  <Dashboard 
    users={users}
    addBook={addBook}
    onSearchChange={onSearchChange}
    searchVal={searchVal}
    sendBook={sendBook}    
  />
)

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal: '',
      story: false      
    }
    this.changeModal = this.changeModal.bind(this);
    this.showStory = this.showStory.bind(this);
  }

  renderModal() {
    switch(this.state.modal){
      case 'add':
        return (
          <ModalBase
            changeModal={this.changeModal}
            content={<AddModal />}
          />
        );
      case 'send':
        return (
          <ModalBase
            changeModal={this.changeModal}
            content={<SendModal />}
          />
        );
      case 'receive':
        return (
          <ModalBase
            changeModal={this.changeModal}
            content={
              <ReceiveModal showStory={this.showStory} />
            }
          />
        );
      default:
        return '';
    }
  }

  changeModal(modal) {
    this.setState({ modal: modal });
  }

  renderStory(){
    if (this.state.story) {
      return <StoryView />
    }
  }

  showStory(bool){
    this.setState({ story: bool });
  }

  render() {
    return (
      <div className="Dashboard">
        <ShelfList setModal={() => this.setModal.bind(this)} />
        <Navbar changeModal={this.changeModal} />
        <button onClick={this.props.addBook}>Sample ADD BOOK</button>
        {this.renderModal()}
        {this.renderStory()}
      </div>
    )
  }
}

export default enhance(DashboardContainer);

// <ShelfList />
// <Navbar />
// {!isLoaded(users)
//   ? ""
//   : isEmpty(users)
//   ? ""
//   : users.map(user => (
//       <button
//         onClick={sendBook}
//         key={user.id}
//         value={user.id}
//       >
//         Send Book
//       </button>
//     ))}
// <button onClick={addBook} />
// <input value={searchVal} onChange={onSearchChange} type="text" />
// <ModalBase content={<SendModal />} />
// <ModalBase content={<AddModal />} />
// <ModalBase content={<ReceiveModal />} />
