import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Botbar.css";
import MainImage from "./MainImage";
import WorkSlider from "./WorkSlider";

const introduction =
  "Jynoe is an aspiring designer from Quezon City, Philippines.";
const introduction2 =
  "Passionate about art — designing, illustrating, and studying visuals.";

const Botbar = ({ activeSection }) => {
  return (
    <div className="botbar">
      {activeSection === "Home" && (
        <Container id="botbar-home">
          <Row>
            <Col className="botbar1">
              <i class="bi bi-stars"></i>
              <div className="intro-div1">{introduction}</div>
            </Col>
            <Col className="botbar2">
              <MainImage />
            </Col>
            <Col className="botbar3">
              <div className="intro-div2">{introduction2}</div>
              <i class="bi bi-stars"></i>
            </Col>
          </Row>
        </Container>
      )}

      {activeSection === "Works" && (
        <Container id="botbar-works">
          <Row>
            <WorkSlider />
          </Row>
        </Container>
      )}

      {activeSection === "About" && (
        <Container id="botbar-works">
          <Row>About</Row>
        </Container>
      )}

      {activeSection === "Playground" && (
        <Container id="botbar-playground">
          <Row>playground</Row>
        </Container>
      )}

      {activeSection === "Contact" && (
        <Container id="botbar-contact">
          <Row>contact</Row>
        </Container>
      )}
    </div>
  );
};

export default Botbar;
