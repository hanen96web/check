import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Profile = ({contact}) => {
  const navigate = useNavigate();
  return (
      <Card style={{ width: '18rem' }}>
      <Card.Img height="25%" variant="top" src={contact.img} />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          {contact.description.substring(0, 10).slice(0, 200)}...
        </Card.Text>
        <Card.Text>
          {contact.price}
        </Card.Text>
        <Button className="decobtn" 
        variant="primary" 
        onClick={() => navigate(`/contact/${contact.id}`)}
        >show
        </Button>
      </Card.Body>
    </Card>
  );
  };

export default Profile;
