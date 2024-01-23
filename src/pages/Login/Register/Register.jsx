import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h2 className='text-center'>Register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo URL" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='cpassword' placeholder="Confirm Password" required/>
                    <Form.Text className="text-danger">
                        
                    </Form.Text>
                    <Form.Text className="text-success">
                        
                    </Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check type='checkbox' label='Accept terms & conditions'/>
                </Form.Group>
                <Button className='w-100' variant="secondary" type="submit">Register</Button>
                <Form.Group className='text-center'>
                    <Form.Text>Already have an account? <Link to='/login'>Login now</Link></Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;