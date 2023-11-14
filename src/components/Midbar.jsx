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
          <Col className="midbar1"> <span className="bolder">Works</span></Col>
          <Col className="midbar2"> <span className="bolder">About</span></Col>
          <Col className="midbar3"> <span className="bolder">Playground</span></Col>
          <Col className="midbar4"> <span className="bolder">Contact</span></Col>
          <Col className="midbar5"> <span className="bolder">&copy; {date}</span></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Midbar;
