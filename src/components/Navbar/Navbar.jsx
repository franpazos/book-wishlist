import logo from './../../assets/logo.png'
import './NavBar.css'

import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from './../Searchbar/Searchbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from "react-bootstrap/Offcanvas"


const NavBar = () => {

    const expand = 'md'


    return (

        <Navbar expand={expand} className="bg-body-light mb-3">
            <Container fluid>
                <Navbar.Brand className="img-logo" href="/">
                    <img src={logo} alt="Web's Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link className='links' href="/wishlist">My Wishlist</Nav.Link>
                            <Nav.Link className='links' href="/add-book">Add Book</Nav.Link>
                            <Nav.Link className='links' href="/about-us">About Us</Nav.Link>

                        </Nav>
                        <SearchBar />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )
}

export default NavBar


