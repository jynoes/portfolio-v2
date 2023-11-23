import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "../styles/Botbar.css";
import MainImage from "./MainImage";
import WorkSlider from "./WorkSlider";

import levi from "../assets/levi12.png";
import paper from "../assets/rip paper 1.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuClipboard } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const introduction =
  "Jynoe is an aspiring designer from Quezon City, Philippines.";
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
                  <Col md="auto" className="slogan">
                    1
                  </Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">
                    Explore
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">
                    2
                  </Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">
                    Envision
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">
                    3
                  </Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">
                    Establish
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">
                    4
                  </Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">
                    Execute
                  </Col>
                </Row>
                <Row className="slogan-container">
                  <Col md="auto" className="slogan">
                    5
                  </Col>
                  <Col md="auto" className="slogan-line"></Col>
                  <Col md="auto" className="slogan">
                    Excel
                  </Col>
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
                <FaStar className="orange"/>
              </div>
              <div class="box box1">
                <span class="icon">
                  <svg
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg"
                  >
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                  </svg>
                </span>
              </div>
              <div class="box box2">
                {" "}
                <span class="icon">
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </span>
              </div>
              <div class="box box3">
                <span class="icon">
                  <svg
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg"
                  >
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>
                </span>
              </div>
              {/* <div class="box box4"></div> */}
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
            </div>
            <img className="paper" src={paper} alt="paper"></img>
          </Col>
        </Container>
      )}
    </div>
  );
};

export default Botbar;
