import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h2 className='text-center'>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
                    <Form.Text className="text-success">
                        
                    </Form.Text>
                </Form.Group>
                <Button className='w-100' variant="secondary" type="submit">Login</Button>
                <Form.Group className='text-center'>
                    <Form.Text>Don't have an account? <Link to='/register'>Register now</Link></Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;