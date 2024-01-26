import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form. password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            navigate(from, {replace: true});
        })
        .then(error => {
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h2 className='text-center'>Login</h2>
            <Form onSubmit={handleSignIn}>
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