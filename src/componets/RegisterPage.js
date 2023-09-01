import { Container, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap';

function RegisterPage() {
  return (
    <Container className='mt-5' style={{width: "50%"}}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the user name" />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{position: "relative"}}/>        
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </Container>
  );
}

export default RegisterPage;