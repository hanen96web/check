import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router";
const Navig = ({ setSearchText, setSearchPrice }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="cho">
          <Navbar.Brand className="cho">ChatApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")} className="cho">
              content
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/home")} className="cho">
              Home
            </Nav.Link>
            <Nav.Link  onClick={() => navigate("/Menu")} className="cho">Menu</Nav.Link>
            <Nav.Link onClick={() => navigate("/contact")} className="cho">
              Contact
            </Nav.Link>
          </Nav>
          <Form
            style={{ display: "flex", width: "300px", borderRadius: "50px" }}
          >
            <Form.Control
              style={{ width: "300px", cursor: "-webkit-grab" }}
              type="text"
              placeholder="Search....."
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Form.Control
              type="number"
              placeholder="0"
              onChange={(e) => setSearchPrice(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navig;
