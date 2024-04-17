import React from "react";
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
          <Row className="text-center about-row1">
            <div className="about1">
              <div className="about-headers">
                <Row>
                  <h1 className="blue-angel1">designer</h1>
                </Row>
                <Row className="header2">
                  <h1 className="blue-angel">developer</h1>
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      )}

      {activeSection === "Playground" && (
        <Container className="topbar-playground">
          <Row>
            <h1 className="topbar-playground-h1">highlights</h1>
          </Row>
          <Row>
            <h1 className="topbar-playground-h2">some of my random designs</h1>
          </Row>
        </Container>
      )}

      {activeSection === "Contact" && (
        <Container className="topbar-contact">
          <div className="topbar-contact-div">
            <div className="topbar-contact1">
              <Row>
                <h1 className="hitmeup">hit me up and we'll make it</h1>
              </Row>
            </div>
            <div className="topbar-contact2">
              <Row>
                <h1 className="possible possible1">possible</h1>
              </Row>
              <Row>
                <h1 className="possible possible2">possible</h1>
              </Row>
              <Row>
                <h1 className="possible possible3">possible</h1>
              </Row>
              <Row>
                <h1 className="possible possible4">possible</h1>
              </Row>
              <Row>
                <h1 className="possible possible5">possible</h1>
              </Row>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Topbar;
