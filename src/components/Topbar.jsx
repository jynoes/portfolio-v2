import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row } from "react-bootstrap";
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <Navbar expand="lg" className="navbar">
        <Container className="navbar-container">
          <Container className="topbar-1">
            Excited for <br /><span className="bolder"> Designer/Developer </span>Positions
          </Container>
          <Navbar.Brand href="#" id="main-brand" className="topbar-2">
            summertonic
          </Navbar.Brand>
          <Container className="topbar-3">
            Portfolio <br /> -- Volume 2 
          </Container>
        </Container>
      </Navbar>
      <Row className="text-center" id="header">
        <h1>Jynoe Sabido</h1>
      </Row>
    </div>
  );
};

export default Topbar;
