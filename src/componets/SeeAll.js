import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from './Carousel'
import {  Link } from 'react-router-dom';

export default class SeeAll extends Component {
  constructor() {  
    super();        
    this.state = { 
        content : [
            {
                imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICA3NS44SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00316318-cbqgnnfmnf-portrait.jpg",
                movie: "Dasara",
                genre: "Action/Adventure"

            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTIxLjJLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00339118-rydnlmullg-portrait.jpg",
              movie: "Kisika Bhai Kisika Jaan",
              genre: "Action/Comedy/Drama"
            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICA0LjdLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343051-hvakxzwsal-portrait.jpg",
              movie: "The Super Mario Bros.",
              genre: "Action/Comedy"
            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAyNy4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353571-qaezyksrtt-portrait.jpg",
              movie: "Balagam",
              genre: "Comedy/Drama"
            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgNTUuN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-cyhgpavbnu-portrait.jpg",
              movie: "John Wick: Chapter 4",
              genre: "Action/Thriller"

          },
          {
            imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyMjQuOEsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-bdbylvqqwb-portrait.jpg",
            movie: "Avatar: The Way of Water",
            genre: "Action/Drama"
          }
          ,
          {
            imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAzNS4zSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346626-vnzlbbnyzy-portrait.jpg",
            movie: "Virupaksha",
            genre: "Action/Thriller"
          },{
            imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgOC40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349309-kzclvwxuhc-portrait.jpg",
            movie: "Evil Dead Rise",
            genre: "Action/Thriller"

        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICA0OC4xSyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00326977-szmnufqdzn-portrait.jpg",
          movie: "Bholaa",
          genre: "Action/Drama"
        }

        ]
    };  
}  


  render() {
    return (
      <div style={{
        height: "82%",
        textAlign: "center",
        marginBottom: "9%"
    }}
    >

    <Carousel/>

    <Container style={{background: "lightgray", marginTop: "2%"}}>
      <Row>
        <Col style={{textAlign: "left"}}>Comming Soon</Col>
        <Link to = {'/upcoming'}>

        <Col style={{textAlign: "right"}}>Explore Upcoming Movies </Col>
        </Link>
      </Row>
    </Container>

    <Container style={{marginTop: "2%"}}>
      <Row>
        <Col>  
          <h3 style={{textAlign: "left"}}>Movies in Selected Location</h3>
        </Col>
      </Row>
    </Container>
        


        <Container style={{marginTop: "2%", display: "flex", flexFlow: "row wrap"}}>
        {
        this.state.content.map(function displayContent(element){
          return  (<div className="mr-2 mb-2" style={{ height: "450px", width: "250px"}}>
                          <div style={{ height: '85%', width: '100%', borderRadius: '10px'}}>
                            <img src={element.imgLink} alt="" style={{objectFit: 'contain', width: '100%', height: '100%', borderRadius: '5%'}}/> 
                          </div>
                          <div className="ml-2 mt-2" style={{height: '15%', textAlign: 'left'}}>
                            <p style={{height: '5px'}}>{element.movie}</p> 
                            <p style={{height: '5px'}}>{element.genre}</p>
                          </div>
                  </div>)  
                    
          //If children must align horizontally parent display style must be flex
        })
        
      }
        </Container>


      </div>
    )
  }
}
