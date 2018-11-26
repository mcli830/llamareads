import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

const ListEntry = props => {
  return (
    <div className="ListEntry">
      <div>Nov 22 2018</div>
      <div>View</div>
      <div>Pax</div>
      <div>Sara Pennypacker</div>
      <div>
        A moving story of the extraordinary friendship between a boy and his
        fox, and their epic journey to be reunited. Beautifully illustrated by
        multi-award winner, Jon Klassen. Pax was only a kit when his family was
        killed and he was rescued by ‘his boy’, Peter…
      </div>
    </div>
  );
};

export default ListEntry;
