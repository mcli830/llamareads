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

// actions
import viewModal from "../../functions/actions/viewModal";
import viewStory from "../../functions/actions/viewStory";

// components
import Navbar from "./components/navbar/Navbar";
import ShelfList from "./components/shelf/ShelfList";
import ModalContainer from "./components/modal/ModalContainer";
import StoryContainer from "./components/storyView/StoryContainer";

// css
import "../../stylesheets/css/base.css";
import Login from "../identity/Login";

const enhance = compose(
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
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

const Dashboard = () => (
  <div className="Dashboard">
    <ShelfList />
    <Navbar />
    <ModalContainer />
    <StoryContainer />
  </div>
)

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
