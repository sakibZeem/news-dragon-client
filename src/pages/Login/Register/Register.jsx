import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);
    const [accept, setAccept] = useState(false);
    
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const cpassword = form.cpassword.value;
        const photo = form.photo.value;

        if(password !== cpassword){
            return setError('Your password did not match');
        }
        else {
            createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
        }
        
        console.log(name, email, password, cpassword); 
    }

    const handleTerms = event => {
        const acc = event.target.checked;
        setAccept(acc)
        
    }

    return (
        <Container className='w-25 mx-auto'>
            <h2 className='text-center'>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
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
                        {error}
                    </Form.Text>
                    <Form.Text className="text-success">
                        
                    </Form.Text>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                    <Form.Check 
                    onClick={handleTerms}
                    type='checkbox' 
                    name='accept' 
                    label= {<>Accept <Link to="/terms">Terms and Condition.</Link></>} />
                </Form.Group>
                <Button className='w-100' variant="secondary" type="submit" disabled={!accept}>Register</Button>
                <Form.Group className='text-center'>
                    <Form.Text>Already have an account? <Link to='/login'>Login now</Link></Form.Text>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Register;