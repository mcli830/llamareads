import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

const ListEntry = ({ book }) => {
  return (
    <div className="ListEntry">
      <div>Nov 22 2018</div>
      <div>View</div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>
        {book.excerpt}
      </div>
    </div>
  );
};

export default ListEntry;
