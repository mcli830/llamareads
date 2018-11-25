import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

const ListEntry = (props) => {
  render() {
    return (
      <div className="ListEntry">
        Entry
      </div>
    )
  }
}
 
export default ListEntry;