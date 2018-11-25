import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withProps, withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked component
import Brand from "./Brand";
import UserMenu from "./UserMenu";

// css
import "../../stylesheets/css/components/navbar.css";

const Navbar = ({ seed }) => (
  <div className="Navbar">
    <Brand />
    <UserMenu />
  </div>
);

Navbar.PropTypes = {
  seed: PropTypes.object
};

export default Navbar;
