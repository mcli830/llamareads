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

// redux actions
import viewModal from "../../functions/configurations/reducer/action/viewModal";
import viewStory from "../../functions/configurations/reducer/action/viewStory";

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
  <div className="Dashboard">
    <ShelfList />
    <Navbar />
    <ModalContainer />
    <StoryContainer />
  </div>
)

export default enhance(Dashboard);