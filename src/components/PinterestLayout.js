import React from "react";
import Pin from "./Pin";
import { Container } from "react-bootstrap";

function PinterestLayout() {
  return (
    <div style={styles.scrollableContainer}>
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
      </Container>
    </div>
  );
}

const styles = {
  scrollableContainer: {
    height: "100vh", // Set the height to 100% of viewport height
    overflowY: "auto", // Enable vertical scrolling
  },
  pin_container: {
    margin: 0,
    padding: 0,
    marginTop: "-10px",
    width: "100%",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "space-between",
  },
};

export default PinterestLayout;
