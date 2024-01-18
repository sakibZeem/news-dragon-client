import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";
import QZone from '../QZone/QZone';
import adBg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div className='d-flex flex-column'>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"> <IoLogoGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"> <IoLogoGithub /> Login with Github</Button>
            </div>
            <div className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><IoLogoFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><IoLogoTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><IoLogoInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <img className='w-100' src={adBg} alt="" />
                <div className='text-center position-absolute top-50 start-50 translate-middle text-white'>
                    <h4 className='fs-1'>Create an Amazing Newspaper</h4>
                    <p className='fs-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;