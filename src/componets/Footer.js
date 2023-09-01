import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';

export default class Footer extends Component {
  render() {
    return (
    <div style={{
            textAlign: "center", 
            backgroundColor: "lightgray",
            height: "9%",
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%"
        }}
        

    >
        <Row style={{height: "70%", background: "lightgray"}}>
          <span style={{textAlign:"center"}}>BookMyShow</span>
        </Row>
    
      </div >
    )
  }
}


