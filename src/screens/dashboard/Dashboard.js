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

const DashboardContainer = ({
  users,
  addBook,
  onSearchChange,
  searchVal,
  sendBook,
  appState,
  modal,
  viewModal
}) => (
  <Dashboard
    users={users}
    addBook={addBook}
    onSearchChange={onSearchChange}
    searchVal={searchVal}
    sendBook={sendBook}
    appState={appState}
    modal={modal}
    viewModal={viewModal}
  />
);

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.appState)
  }


  renderModal() {
    switch (this.props.modal) {
      case "add":
        return (
          <ModalBase
            changeModal={this.changeModal}
            content={<AddModal 
              changeModal={this.changeModal}
            />}
            title="Add a book to your shelf"
          />
        );
      case "send":
        return (
          <ModalBase
            changeModal={this.changeModal}
            content={<SendModal book={this.state.sending.book} />}
            title="Send"
          />
        );
      case "receive":
        return (
          <ModalBase
            changeModal={this.changeModal}
            content={<ReceiveModal showStory={this.showStory} />}
            title="Receive"
          />
        );
      default:
        return "";
    }
  }

  renderStory() {
    // if (this.state.story) {
    //   return (
    //     <StoryView book={this.state.viewing.book} showStory={this.showStory} />
    //   );
    // }
  }

  render() {
    return (
      <div className="Dashboard" >
        <ShelfList />
        <Navbar dashState={this.props.modal} />
        {console.log(this.props.appState)}
        {this.renderModal()}
        {this.renderStory()}
      </div>
    );
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
