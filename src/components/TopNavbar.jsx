import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Col } from "react-bootstrap";
import "../styles/Topbar.css";
import { CSSTransition } from "react-transition-group";

const words = ["summertonic", "transition", "another", "word", "example"];

const TopNavbar = ({ onResetClick }) => {
  const [activeSection, setActiveSection] = useState("Home");

  const [transitionWord, setTransitionWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Interval duration in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setTransitionWord(words[currentIndex]);
  }, [currentIndex]);

  return (
    <Navbar expand="lg" className="top-navbar">
      <Container className="navbar-container">
        <Col lg={4} className="topbar-1">
          Excited for
          <span className="bolder">
            {" "}
            Designer &amp;<br />
            Developer{" "}
          </span>
          Positions
        </Col>

        <Col lg={4}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
          >
            <Navbar.Brand
              id="main-brand"
              className="topbar-2"
              onClick={() => {
                setActiveSection("Home");
                onResetClick();
              }}
            >
              <span className="rolling-up-animation">{transitionWord}</span>
            </Navbar.Brand>
          </CSSTransition>
        </Col>

        <Col lg={4}>
          <Container className="topbar-3">
            Portfolio <br /> — Volume 2
          </Container>
        </Col>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

