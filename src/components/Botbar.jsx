import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import "../styles/Botbar.css";
import MainImage from "./MainImage";
import WorkSlider from "./WorkSlider";

import levi from "../assets/levi12.png";
import { GiShintoShrine } from "react-icons/gi";
import { GiVikingHelmet } from "react-icons/gi";
import { GiStoneTower } from "react-icons/gi";

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
        <Container id="botbar-works" className="botbar-works">
          <Row>
            <WorkSlider />
          </Row>
        </Container>
      )}

      {activeSection === "About" && (
        <Container id="botbar-about">
          <Row className="about-row">
            <Col lg={4}>
              <img className="levi" src={levi} alt="levi"></img>
            </Col>
            <Col lg={4} className="about-desc-col">
              <div className="philosophy-card">
                <div>
                  <h3 className="blue-angel1">user centric designs</h3>
                </div>
                <div>
                  <h3 className="philosophy">PHILOSOPHY</h3>
                </div>
                <div>
                  <h3 className="blue-angel2">clean clear concise~</h3>
                </div>
              </div>
              <div className="about-desc1-container">
                <p className="about-desc1">
                  The designer/developer of this portfolio absolutely likes
                  illustrating. As an amateur, he find anime characters so cool
                  then proceeds to capture their characteristics in his notes.
                  He also enjoys looking at visual arts such as graphic and
                  architectural designs, anime illustrations, paintings, etc. He
                  plans to take that awe and enthusiasm to the next level in the
                  future by pursuing a degree in arts.
                </p>
              </div>
            </Col>
            <Col lg={4} className="about-slogan-col">
            <div>Education</div>
              <div className="about-slogan-container">
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">1</Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">Explore</Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">2</Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">Envision</Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">3</Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">Establish</Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">4</Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">Execute</Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">5</Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">Excel</Col>
                </Row>
              </div>
            </Col>
          </Row>
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
