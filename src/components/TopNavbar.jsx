import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import "../styles/Topbar.css";


const TopNavbar = ({ onResetClick }) => {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <Navbar expand="lg" className="top-navbar">
        <Container className="navbar-container">
          <Col lg={4} className="topbar-1">
            Excited for 
            <span className="bolder"> Designer &<br />Developer </span>Positions
          </Col>
          <Col lg={4}>
            <Navbar.Brand id="main-brand" className="topbar-2" onClick={() => { setActiveSection("Home"); onResetClick(); }}>
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
  )
}

export default TopNavbar