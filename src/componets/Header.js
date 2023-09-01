import React, { Component , render} from 'react'
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';
import Signin from './Signin';


export default class Header extends Component {
  render() {
    return (
      <div style={{
        height: "9%",
        textAlign: "center", 
        backgroundColor: "lightgray",
      }}
      >


<style type="text/css">
        {`
    .btn-primary {
      background-color: red;
      color: white;
    }
    `}
    </style>

    <Row style={{height: "70%", background: "lightgray"}}>
      <Col sm={2}>
      <Link to = {'/'}>
            <img src="https://imgs.search.brave.com/AXBpO2sAOt516irQRoU2x3fAV06QvYOEGxRv6Gq7NYw/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9QdXJwbGUx/MjMvdjQvYmQvNTgv/OWMvYmQ1ODljMzUt/YmVkYy0zMWY5LTc2/NjctYzk1NTU3YjMy/M2FkL3NvdXJjZS81/MTJ4NTEyYmIuanBn" alt="" style={{width:"50px", height: "50px", marginTop: "15px"}} />
      
      </Link>
      </Col>
      <Col sm={6}>
      <InputGroup size="sm" className="mb-3" style={{marginTop: "15px"}} >
          <InputGroup.Text id="inputGroup-sizing-sm">
          {/* <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /> */}
          <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Col>
      <Col sm={1} >
      <DropdownButton style={{marginTop: "15px"}}
          variant="outline-secondary"
          title="Location"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Warangal</Dropdown.Item>
          <Dropdown.Item href="#">Hyderabad</Dropdown.Item>
          <Dropdown.Item href="#">Mumbai</Dropdown.Item>
          <Dropdown.Item href="#">Delhi</Dropdown.Item>
        </DropdownButton>
        
      </Col>
      <Col sm={1} >
      <Link to={'/signin'}  >
      <Button style={{marginTop: "15px"}} variant='primary '>Sign In </Button>
      </Link>
      </Col>
      <Col sm={1} style={{marginTop: "15px"}}>
      <FontAwesomeIcon icon={faBars} style={{marginTop: "15px"}}/>
      </Col>
      <Col sm={1} >
      </Col>

    </Row>
    <Row style={{height: "30%", background: "gray"}}></Row>
      </div>
    )
  }
}
