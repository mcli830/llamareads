import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked components
import Inbox from "./Inbox";
import Avatar from "./Avatar";

// css
import "../../stylesheets/css/base.css";

const UserMenu = () => {
  return (
    <div className="UserMenu">
      <Inbox />
      <Avatar />
    </div>
  );
};

export default UserMenu;
