import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Topbar.css";

const Topbar = ({ activeSection }) => {
  return (
    <div className="topbar">
      {activeSection === "Home" && (
        <Row className="text-center">
          <Col className=" header">
            <Row className="header1">
              <h1 className="lato">JYNOE</h1>
            </Row>
            <Row className="header2">
              <h1 className="blue-angel">SABIDO</h1>
            </Row>
          </Col>
        </Row>
      )}

      {activeSection === "Works" && (
        <Container>
          <Row className="text-center">
            <Col className="works1">
              <i class="bi bi-stars"></i>
              <div className="works-div1">
                Projects that I am proud and excited to share about
              </div>
            </Col>
            <Col className="header">
              <Row className="header1">
                <h1 className="lato">selected</h1>
              </Row>
              <Row className="header2">
                <h1 className="blue-angel">WORKS</h1>
              </Row>
            </Col>
            <Col className="works3">
              <div className="works-div3">
                Hold and Drag to discover through the slider
              </div>
              <i class="bi bi-stars"></i>
            </Col>
          </Row>
        </Container>
      )}

      {activeSection === "About" && (
        <Container className="topbar-about">
          <Row className="text-center">
            <Col className="about1"></Col>
            <Col className="about2"></Col>
            <Col className="about3">
              <Row className="header1">
                <h1 className="lato">designer</h1>
              </Row>
              <Row className="header2">
                <h1 className="blue-angel">developer</h1>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Topbar;
