import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Botbar.css";
import MainImage from "./MainImage";
import WorkSlider from "./WorkSlider";

import levi from "../assets/levi12-min.png";
import paper from "../assets/rip paper 1.png";
import merry from "../assets/merry.png";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuClipboard } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiUpwork } from "react-icons/si";

const introduction =
  // "Jynoe is an aspiring designer from Quezon City, Philippines.";
const introduction2 =
  "Passionate about art — designing, illustrating, and studying visuals.";

const Botbar = ({ activeSection }) => {
  const emailRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const emailText = emailRef.current.innerText;
    navigator.clipboard.writeText(emailText);
    setCopied(true);
  };

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
            <Col lg={4} className="practice-col">
              {Array(13)
                .fill()
                .map((_, index) => (
                  <div className="practice" key={index}>
                    PRACTICE
                  </div>
                ))}
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
              <div className="about-education">
                <h3 className="pup">
                  Polytechnic University <br />
                  <span className="pup2">of the Philippines</span>
                </h3>
                <div className="cpe-row">
                  <h4 className="cpe">
                    Bachelor of Science in
                    <br />
                    Computer Engineering
                  </h4>
                  <h4 className="cpe-year">2023</h4>
                </div>
                <div className="shs-row">
                  <h4 className="shs">Senior High School - STEM Graduate</h4>
                  <h4 className="shs-year">2019</h4>
                </div>
                <div className="svias-row">
                  <h4 className="svias">
                    Saint Vincent Institute of Arts & Sciences
                  </h4>
                </div>
              </div>
              <div className="about-slogan-container">
                <div className="career-process">
                  <h4 className="career">Career Process</h4>
                </div>
                <Row className="slogan-container">
                  <Col md="auto" xs={2} className="slogan">
                    1
                  </Col>
                  <Col md="auto" xs={2} className="slogan-line"></Col>
                  <Col md="auto" xs={8} className="slogan">
                    Explore
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" xs={2} className="slogan">
                    2
                  </Col>
                  <Col md="auto" xs={2} className="slogan-line"></Col>
                  <Col md="auto" xs={8} className="slogan">
                    Envision
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" xs={2} className="slogan">
                    3
                  </Col>
                  <Col md="auto" xs={2} className="slogan-line"></Col>
                  <Col md="auto" xs={8}  className="slogan">
                    Establish
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" xs={2}  className="slogan">
                    4
                  </Col>
                  <Col md="auto" xs={2}  className="slogan-line"></Col>
                  <Col md="auto" xs={8}  className="slogan">
                    Execute
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" xs={2}  className="slogan">
                    5
                  </Col>
                  <Col md="auto" xs={2}  className="slogan-line"></Col>
                  <Col md="auto" xs={8}  className="slogan">
                    Excel
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {activeSection === "Playground" && (
        <Container id="botbar-playground" className="botbar=playground scrollable-section" >
          
        </Container>
      )}

      {activeSection === "Contact" && (
        <Container id="botbar-contact">
          <Col lg={4} className="botbar-contact1">
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div>
              <h1 className="hover">HOVER ME</h1>
            </div>
            <div class="card">
              <div class="background"></div>
              <div class="logo">
                <FaStar className="orange" />
              </div>
              <a href="https://wa.me/message/XS232AS4QJ5EE1" target="_blank" rel="noreferrer">
                <div class="box box1">
                  <IoLogoWhatsapp className="social-icons1" />
                </div>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0178586bcce63b6ddb"
                target="_blank" rel="noreferrer"
              >
                <div class="box box2">
                  <SiUpwork className="social-icons2" />
                </div>
              </a>
              <a
                href="https://discord.gg/MtE9KrmV"
                target="_blank" rel="noreferrer"
              >
                <div class="box box3">
                  <FaDiscord className="social-icons3" />
                </div>
              </a>
            </div>
          </Col>
          <Col lg={8} className="botbar-contact2">
            <div className="contacts-div">
              <div className="contacts-div1">
                <a href="mailto:jynoe.sabido22@gmail.com">
                  <h1 className="contacts">Email</h1>
                  <IoMdMail className="contacts-icon1" />
                </a>
              </div>
              <div className="div-email">
                <p className="email">
                  <span ref={emailRef} id="email">
                    jynoe.sabido22@gmail.com
                  </span>
                  {copied ? (
                    <LuClipboardCheck
                      className="copy-icon"
                      onClick={handleCopyClick}
                    />
                  ) : (
                    <LuClipboard
                      className="copy-icon"
                      onClick={handleCopyClick}
                    />
                  )}
                </p>
              </div>
              <div className="contacts-div2">
                <a href="https://github.com/jynoes" target="blank">
                  <h1 className="contacts">GitHub</h1>{" "}
                  <FaGithubSquare className="contacts-icon2" />
                </a>
              </div>
              <div className="contacts-div3">
                <a
                  href="https://www.linkedin.com/in/jynoe-sabido-aab142248/"
                  target="blank"
                >
                  <h1 className="contacts">LinkedIn</h1>{" "}
                  <FaLinkedin className="contacts-icon3" />
                </a>
              </div>
              
            <img className="merry" src={merry} alt="merry"></img>
            </div>
            <img className="paper" src={paper} alt="paper"></img>
          </Col>
        </Container>
      )}
    </div>
  );
};

export default Botbar;
