import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withProps,
  withHandlers,
  branch,
  renderNothing,
  withState,
  withStateHandlers
} from "recompose";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth }))
);

const Avatar = (props) => {
  return (
    <div className="Avatar-text">
      <div className="Avatar-text-content">Hi {props.auth.displayName.split(" ")[0]}</div>
      {/* <img  className="Avatar" src={props.auth.photoURL} onClick={() => props.firebase.auth().signOut()} /> */}
    </div>
  )
};

export default enhance(Avatar);
