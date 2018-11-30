import React from "react";
import "../../../../stylesheets/css/base.css";

const ModalBaseTitle = props => (
  <div>
    <span className="text-light">{props.prefix}</span>
    <span className="ModalBaseTitle-book-title" style={{ fontStyle: "italic" }}>
      {props.title}
    </span>
    <span className="text-light">{props.suffix}</span>
  </div>
);

export default ModalBaseTitle;
