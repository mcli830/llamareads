import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore, firebaseConnect, firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from "react-redux";

// components
import ListEntry from "./ListEntry";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  connect(
    ({ firebase: { auth } }) => ({ auth }),
  ),
  firestoreConnect(({ auth }) => [
    {
      collection: 'usersBooks',
          where: [
            ['inbox', '==', true],
            ['user', '==', auth.uid]
          ]
    },
  ]),
  connect(
    ({ firestore }) => ({
      usersBooks: firestore.ordered.usersBooks,
    })
  ) 
)

const Inbox = ({usersBooks, changeModal}) => {
  return (
    <div className="Inbox">
      <div className="Inbox-header">Inbox</div>
      <div className="Inbox-list">
      {
        !isLoaded(usersBooks)
          ? <div className="ListEntry"><div className="ListEntry-text" style={{textAlign: 'center'}}>Nothing here!</div></div>
          : isEmpty(usersBooks)
              ? <div className="ListEntry"><div className="ListEntry-text" style={{ textAlign: 'center' }}>Nothing here!</div></div>
            : usersBooks.map((inbox) =>
              <ListEntry
                key={inbox && inbox.id}
                inbox={inbox}
                changeModal={changeModal}
              />
              )
      }
      </div>
    </div>
  );
};

export default enhance(Inbox);
