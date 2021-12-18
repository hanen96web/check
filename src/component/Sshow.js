import React from "react";
import { useParams } from "react-router";
import { contact } from "react";

const Sshow = ({ data }) => {
  const params = useParams();
  let myId = params.id;
  let myContact = data.find((contact) => contact.id == myId);
  return (
    <div>
      <h1>ghbjhbgvhkj</h1>
    </div>
  );
};

export default Sshow;
