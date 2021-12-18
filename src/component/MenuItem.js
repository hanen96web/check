import React from "react";
import { Card, Button } from "react-bootstrap";

const MenuItem = ({ chat }) => {
  return (
    <div style={{ width: "18rem" }} >
      <Card >
        <Card.Img className="cardd" height="200px" variant="top" src={chat.img} />
        <Card.Body className="gtgt">
          <Card.Title className="hanin">{chat.name}</Card.Title>
          <Card.Text className="hanenf">{chat.description}</Card.Text>
          <Card.Text className="bbttnn">{chat.price}</Card.Text>
          <Button className="btndesign" variant="primary">
            Show
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuItem;
