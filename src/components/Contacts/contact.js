import React from "react";

const Contact = (props) => (
  <div className="contact">
    <div className="contact-name">
      {props.firstName} {props.lastName}
    </div>
    <div className="contact-phoneNumber">{props.phone}</div>
    <div className="gender">{props.gender}</div>
  </div>
);

export default Contact;
