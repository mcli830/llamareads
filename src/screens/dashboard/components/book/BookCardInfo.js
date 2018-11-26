import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withHandlers, branch, renderNothing } from "recompose";
import { withFirestore } from "react-redux-firebase";

// css
import "../../../../stylesheets/css/base.css";

const BookCardInfo = () => {
  return (
    <div className="BookCardInfo">
      <div className="BookCard-title">
        Title: <strong>Pax</strong>
      </div>
      <div className="BookCard-author">
        Author: <strong>Sara Pennypacker</strong>
      </div>
      <div className="BookCard-description">
        A moving story of the extraordinary friendship between a boy and his
        fox, and their epic journey to be reunited. Beautifully illustrated by
        multi-award winner, Jon Klassen. Pax was only a kit when his family was
        killed and he was rescued by ‘his boy’, Peter…
      </div>
    </div>
  );
};

export default BookCardInfo;
