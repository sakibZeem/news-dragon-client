import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { IoPersonCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.error(error))
    }
    return (
        <Container className='my-3'>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <Nav.Link href="#deets">
                                    <IoPersonCircle style={{ fontSize: '40px' }}></IoPersonCircle>
                                    <small> {user.displayName} </small>
                                </Nav.Link>
                            }
                            {
                                user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                    : <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;