import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import './style/Navbar.css';
import i from '../img/i.jpg';
import logo from '../img/logo.jfif';


function NavbarComponent() {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="NewUU" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/quiz">Quiz</Nav.Link>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#courses/3.1">Course 1</NavDropdown.Item>
                            <NavDropdown.Item href="#courses/3.2">
                                Another Course
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#courses/3.3">Course #3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#courses/3.4">
                                Math 211
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="justify-content-end">

                        <div className="navbar-user-img">
                            <img src={i} alt="" />
                            {/* <Icon.PersonCircle /> */}
                        </div>
                        <NavDropdown title={"Ismoiljon Mirabdullaev"} id="basic-nav-dropdown">
                            <NavDropdown.Item>ID: {2110176}</NavDropdown.Item>
                            <NavDropdown.Item>Edit Profile <Icon.PencilSquare /></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="text-bold text-danger">
                                LOGOUT <Icon.BoxArrowInUpRight />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;