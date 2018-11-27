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

import firebase from "firebase";
import viewModal from "../../functions/actions/viewModal";
import viewStory from "../../functions/actions/viewStory";

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

const enhance = compose(
  withProps({
    modal: ""
  }),
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  connect(
    ({view, dispatch}) => ({view, dispatch})
  ),
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

// const DashboardContainer = ({
//   users,
//   addBook,
//   onSearchChange,
//   searchVal,
//   sendBook
// }) => (
//   <Dashboard
//     users={users}
//     addBook={addBook}
//     onSearchChange={onSearchChange}
//     searchVal={searchVal}
//     sendBook={sendBook}
//   />
// );

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  renderModal() {
    switch (this.props.view.modal) {
      case "add":
        return (
          <ModalBase
            exit={()=>this.props.dispatch(viewModal(''))}
            content={<AddModal />}
            title="Add a book to your shelf"
          />
        );
      case "send":
        return (
          <ModalBase
            content={<SendModal />}
            title="Send"
          />
        );
      case "receive":
        return (
          <ModalBase
            content={<ReceiveModal />}
            title="Receive"
          />
        );
      default:
        return "";
    }
  }

  renderStory() {
    if (this.props.view.story) {
      return (
        <StoryView book={this.props.view.book} />
      );
    }
  }

  render() {
    return (
      <div className="Dashboard" onClick={()=>this.props.dispatch(viewModal('add'))}>
        <ShelfList />
        <Navbar />
        {this.renderModal()}
        {this.renderStory()}
      </div>
    );
  }
}

export default enhance(Dashboard);

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
