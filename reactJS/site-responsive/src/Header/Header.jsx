import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"

import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default () =>{
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" bg="dark">
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