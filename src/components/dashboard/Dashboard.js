import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// linked component
import Navbar from "../navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Navbar />
      <div>Dashboard</div>
    </div>
  );
};

export default Dashboard;
