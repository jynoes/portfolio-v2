import React, { useState } from "react";
import Botbar from "./Botbar";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Midbar.css";
import Topbar from "./Topbar";
import TopNavbar from "./TopNavbar";

const Midbar = () => {
  const date = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("Home");

  const handleResetClick = () => {
    // Update the activeSection state in Midbar to "Home"
    setActiveSection("Home");
  };

  return (
    <>
      <TopNavbar onResetClick={handleResetClick} />
      
      <Topbar activeSection={activeSection} />

      <div className="midbar">
        <Container>
          <Row>
              <Col className="midbar1" onClick={() => setActiveSection("Works")}>
                {" "}
                <span className="bolder">Works</span>
              </Col>
            <Col className="midbar2" onClick={() => setActiveSection("About")}>
              {" "}
              <span className="bolder">About</span>
            </Col>
            <Col className="midbar3" onClick={() => setActiveSection("Playground")}>
              {" "}
              <span className="bolder">Playground</span>
            </Col>
            <Col className="midbar4" onClick={() => setActiveSection("Contact")}>
              {" "}
              <span className="bolder">Contact</span>
            </Col>
            <Col className="midbar5">
              {" "}
              <span className="bolder">&copy; {date}</span>
            </Col>
          </Row>
        </Container>
      </div>

      <Botbar activeSection={activeSection} />
    </>
  );
};

export default Midbar;
