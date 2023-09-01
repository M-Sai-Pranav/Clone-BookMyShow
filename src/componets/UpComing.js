import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
import {  Link } from 'react-router-dom';

export default class SeeAll extends Component {
    
  constructor() {  
    super();        
    this.state = { 
        content : [
            {
                imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjgsIEFwciAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310078-gcmxgsxcgm-portrait.jpg",
                movie: "Agent",
                genre: "Action/Adventure"

            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTc4LjRLIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00348725-ardceatdvs-portrait.jpg",
              movie: "PS-2",
              genre: "Action/Comedy/Drama"
            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-NSwgTWF5IDIwMjM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00072884-ftvuyrrvnk-portrait.jpg",
              movie: "Ugram",
              genre: "Action"
            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-NSwgTWF5IDIwMjM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354851-pzsjmxbpce-portrait.jpg",
              movie: "Ramabaanam",
              genre: "Comedy/Drama"
            },
            {
              imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTIsIE1heSAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00354148-jeelplagyz-portrait.jpg",
              movie: "Custody",
              genre: "Action/Thriller"

          },
          {
            imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MiwgSnVuIDIwMjM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00330424-wdkbhvzxgf-portrait.jpg",
            movie: "Jawan",
            genre: "Action/Drama"
          }
          ,
          {
            imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTEsIEF1ZyAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00331686-rcqctmvbqz-portrait.jpg",
            movie: "Jailer",
            genre: "Action/Thriller"
          },{
            imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTEsIEF1ZyAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311762-rhgjsbwqem-portrait.jpg",
            movie: "Animal",
            genre: "Action/Thriller"

        },
        {
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjgsIFNlcCAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00301886-gqydwwldjx-portrait.jpg",
          movie: "Salaar",
          genre: "Action/Drama"
        },{
          imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-Tm92IDIwMjM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00313411-hnacqdddzv-portrait.jpg",
          movie: "Tiger",
          genre: "Action/Adventure"

      },
      {
        imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MTAsIE5vdiAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310793-ggmgrvdkny-portrait.jpg",
        movie: "The Marvels",
        genre: "Action/Comedy/Drama"
      },
      {
        imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjUsIERlYyAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321161-wwcbabffua-portrait.jpg",
        movie: "Aquaman And The Lost Kingdom",
        genre: "Action"
      },
      {
        imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjAyMw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343267-ddflabmecs-portrait.jpg",
        movie: "Tillu Square",
        genre: "Comedy/Drama"
      },
      {
        imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjIsIERlYyAyMDIz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00326964-negpflwmtc-portrait.jpg",
        movie: "Dunki",
        genre: "Action/Thriller"

    },
    {
      imgLink: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-MjAyMw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00129680-wvpbnmqjql-portrait.jpg",
      movie: "Bharateeyudu 2",
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




    <Container style={{background: "lightgray", marginTop: "2%"}}>
      <Row>
        <Col style={{textAlign: "left"}}> Now Showing</Col>
        <Link to = {'/seeall'}>

        <Col style={{textAlign: "right"}}> In Cinemas near you </Col>
        </Link>
      </Row>
    </Container>

    <Container style={{marginTop: "2%"}}>
      <Row>
        <Col>  
          <h3 style={{textAlign: "left"}}>Upcoming Movies in Selected Location</h3>
        </Col>
      </Row>
    </Container>
        
        <Container style={{marginTop: "1%", display: "flex", flexFlow: "row wrap"}}>
          
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
