import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// always use rsi
import '../assets/styles/header.css'
import {Button, Form, FormControl, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">JFLIX</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/movies">MOVIES</Nav.Link>
                    <Nav.Link href="/TV">TV</Nav.Link>
                    <Nav.Link href="#pricing">FREE</Nav.Link>
                    <Nav.Link href="/signin">MY JFLIX</Nav.Link>
                </Nav>
                <Form inline>
                    
                    <Nav.Link className='color' href="#pricing">Redeem</Nav.Link>
                    <Nav.Link className='color' href='/signin'>Sign in</Nav.Link>
                    
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        
        
        </>
    
    )
};

export default Header;
// always use / at the end for the end of the 