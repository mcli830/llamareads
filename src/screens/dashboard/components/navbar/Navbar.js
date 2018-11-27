import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withProps, withHandlers, branch, renderNothing, withState, withStateHandlers } from "recompose";
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

// linked component
import Brand from "./Brand";
import UserMenu from "./UserMenu";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
  firebaseConnect(),
  connect(({ firebase: { auth } }) => ({ auth })),
);

const Navbar = ({ setModal, auth }) => (
  <div className="Navbar">
    <Brand />
    <UserMenu setModal={setModal} auth={auth} />
  </div>
);

Navbar.propTypes = {
  username: PropTypes.string
};

export default enhance(Navbar);
