import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
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
                        <Navbar.Text>
                            <div className="navbar-user-img">
                                <img src={i} alt="" />
                                {/* <Icon.PersonCircle /> */}
                            </div>
                            <a href="#login">Ismoiljon Mirabdullaev</a>
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip>
                                        Tooltip on <strong>{placement}</strong>.
                                    </Tooltip>
                                }
                            >
                                <Button variant="secondary">Tooltip on {placement}</Button>
                            </OverlayTrigger>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;