import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// components
import Navbar from "../navbar/Navbar";
import ShelfList from "./ShelfList";

// css
import "../../stylesheets/css/base.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <ShelfList />
      <Navbar />
    </div>
  );
};

export default Dashboard;
