import "./Header.css"

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () =>{
    return (
        <Navbar data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic" 
                collapseOnSelect  expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#">GSS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="item" href="#">Início</Nav.Link>
                    <Nav.Link className="item" href="#">Sobre nós</Nav.Link>
                    <Nav.Link className="item" href="#">Contatos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )    
}