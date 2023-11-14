import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <Navbar expand="lg" className="navbar">
        <Container className="navbar-container">
          <Col lg={4} className="topbar-1">
            Excited for 
            <span className="bolder"> Designer &<br />Developer </span>Positions
          </Col>
          <Col lg={4}>
            <Navbar.Brand href="#" id="main-brand" className="topbar-2">
              summertonic
            </Navbar.Brand>
          </Col>
          <Col lg={4}>
            <Container className="topbar-3">
              Portfolio <br /> — Volume 2
            </Container>
          </Col>
        </Container>
      </Navbar>
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
    </div>
  );
};

export default Topbar;
