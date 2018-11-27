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
      collection: 'inboxList', where: ['inboxFor', '==', auth.uid],
    },
  ]),
  connect(
    ({ firestore }) => ({
      inboxList: firestore.ordered.inboxList,
    })
  ) 
)

const Inbox = ({inboxList, changeModal}) => {
  return (
    <div className="Inbox">
      <div className="Inbox-header">Inbox</div>
      <div className="Inbox-list">
      {
        !isLoaded(inboxList)
          ? ''
          : isEmpty(inboxList)
            ? ''
            : inboxList.map((inbox) =>
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
