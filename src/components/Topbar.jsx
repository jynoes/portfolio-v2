import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/Topbar.css";

const Topbar = () => {

  return (
    <div className="topbar">
      
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
