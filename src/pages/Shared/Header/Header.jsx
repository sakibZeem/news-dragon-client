import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Container className='my-4'>
            <div className="text-center">
                <Link to="/"><img src={logo} alt="" /></Link>
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p> {moment().format("dddd, MMMM D, YYYY")} </p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' pauseOnHover speed={80}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;