import React from "react";
import Pin from "./Pin";
import { Container } from "react-bootstrap";

function PinterestLayout() {
  return (
    <div style={styles.scrollableContainer} className="scrollableContainer">
      <Container style={styles.pin_container}>
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
        <Pin size="small" />
    
      </Container>
    </div>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    marginTop: "-10px",
    width: "100%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "space-between",
  },

};



export default PinterestLayout;
