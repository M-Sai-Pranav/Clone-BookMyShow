import { Container, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <Container className='mt-5' style={{width: "50%"}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{position: "relative"}}/>        
      </Form.Group>
      <Link to={'/register'}>
      <p>Register</p>
      </Link>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    </Container>
  );
}

export default Signin;