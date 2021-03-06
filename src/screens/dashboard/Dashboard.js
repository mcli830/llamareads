import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withStateHandlers,
  withState,
  withProps
} from "recompose";
import {
  firebaseConnect,
  firestoreConnect,
  withFirestore
} from "react-redux-firebase";

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
import Background from '../../images/Llama_background.png';

const enhance = compose(
  withFirestore,
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
  firestoreConnect(({ auth }) => [
    {
      collection: "users"
    }
  ]),
  connect(
    ({ firestore }) => ({
      users: firestore.ordered.users
    })
  ),
  connect(
    ({ app }) => ({ appState: app })
  ),
  withState('modal', 'viewModal', 'add'),
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
  <div className="Dashboard" style={{backgroundImage: `url(${Background})`}}>
    <ShelfList />
    <div className="Llama-container"></div>
    <Navbar />
    <ModalContainer />
    <StoryContainer />
  </div>
)

export default enhance(Dashboard);
