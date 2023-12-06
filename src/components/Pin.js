import React from 'react'
import { Container } from 'react-bootstrap'

function Pin(props) {
  return (
    <div style={{
      ...styles.pin,
      ...styles[props.size]
    }}>

    </div>
  )
}

const styles = {
  pin: {
    margin: '10px 0px',
    padding: 0,
    borderRadius: '16px',
    border: "solid 2px #121212"
  },
  small: {
    gridRowEnd: 'span 26'
  },
  medium: {
    gridRowEnd: 'span 33'
  },
  large: {
    gridRowEnd: 'span 45'
  },
}

export default Pin