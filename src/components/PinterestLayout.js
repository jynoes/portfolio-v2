import React from "react";
import Pin from "./Pin";
import { Container } from "react-bootstrap";

function PinterestLayout() {
  return (
    <Container>
      <div style={styles.pin_container}>
        <Pin size="small" />
        <Pin size="medium" />
        <Pin size="large" />
      </div>
    </Container>
  );
}

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "center",
    backgroundColor: "black",
  },
};

export default PinterestLayout;
