import React from "react";
import Profile from "./Profile";
const Contact = ({ contact }) => {
  return (
    <div className="ccttnn">
      {contact.map((contact) => (
        <Profile contact={contact} />
      ))}
    </div>
  );
};

export default Contact;
