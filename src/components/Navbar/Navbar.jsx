import logo from './../../assets/logo.png'
import './NavBar.css'

import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from './../Searchbar/Searchbar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from 'react-router-dom';


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
                            <Link to="/wishlist" className='links nav-link'>My Wishlist</Link>
                            <Link to="/add-book" className='links nav-link'>Add Book</Link>
                            <Link to="/about-us" className='links nav-link'>About Us</Link>
                        </Nav>
                        <SearchBar />
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )
}

export default NavBar


