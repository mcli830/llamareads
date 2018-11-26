import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withHandlers, branch, withStateHandlers, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked components
import Inbox from "./Inbox";
import Avatar from "./Avatar";

// css
import "../../../../stylesheets/css/base.css";

const enhance = compose(
)

const UserMenu = ({auth}) => {
  return (
    <div className="UserMenu">
    {auth.displayName}
      <Inbox />
      <Avatar />
    </div>
  );
};

export default enhance(UserMenu);
