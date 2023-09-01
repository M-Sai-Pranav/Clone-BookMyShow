import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel';
import {  Link } from 'react-router-dom';

export default class SeeAll extends Component {
    render() {
      return (
        <div style={{
          height: "82%",
          textAlign: "center"
      }}
        
        >
  
  <Carousel>
        <Carousel.Item interval={500} >
          <img
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1681798608677_offerweb.jpg"
            alt="promotion-banner" style={{width: "50%"}}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1681206701297_deskstop.jpg"
            alt="promotion-banner" style={{width: "50%"}}
  
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680288536492_jayweb.jpg"
            alt="promotion-banner" style={{width: "50%"}}
  
          />
        </Carousel.Item>
      </Carousel>   
      </div>
      )
    }
  }
  