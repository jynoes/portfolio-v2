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

// const styles = {
//   pin_container: {
//     margin: 0,
//     padding: 0,
//     marginTop: "-10px",
//     width: "100%",
//     position: "relative",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, 250px)",
//     gridAutoRows: "10px",
//     justifyContent: "space-between",
//   },

// };

// const styles = {
//   pin_container: {
//     margin: 0,
//     padding: 0,
//     marginTop: "-10px",
//     width: "100%",
//     position: "relative",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "grid",
//     gridAutoRows: "10px",
//     justifyContent: "space-between",
//     gridGap: "10px", // Add some gap between the pins
//     gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Base column width of 250px
//   },
// };

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
    gridAutoRows: "auto", // Allow rows to size based on content
    justifyContent: "space-between",
    gridGap: "10px", // Add some gap between the pins
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // Adjust the min and max widths
  },

  pin: {
    aspectRatio: "1 / 1", // Maintain a 1:1 aspect ratio for each pin container
    width: "100%", // Ensure the width of the pin container fills the grid column
  },
};


export default PinterestLayout;
