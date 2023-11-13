import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Botbar.css";

import vector from "../assets/";

const Botbar = () => {
  return (
    <div className="botbar">
      <Container>
        <Row>
          <Col className="botbar1">1</Col>
          <Col className="botbar2">
            <img src={vector}></img>
          </Col>
          <Col className="botbar3">1</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Botbar;
