import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Midbar.css";

const Midbar = () => {
    const date = new Date().getFullYear();
  return (
    <div className="midbar">
      <Container>
        <Row>
          <Col className="midbar1">01. Home</Col>
          <Col className="midbar2">02. About</Col>
          <Col className="midbar3">03. Playground</Col>
          <Col className="midbar4">04. Contact</Col>
          <Col className="midbar5">&copy; {date}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Midbar;
