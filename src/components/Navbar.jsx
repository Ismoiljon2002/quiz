import React, { useContext } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

import './style/Navbar.css';
import i from '../img/i.jpg';
import logo from '../img/logo.jfif';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

function NavbarComponent() {

    const { isAuth, setIsAuth, user, setUser } = useContext(UserContext);
    const logout = () => {
        setIsAuth(!isAuth);
        setUser({})
    }

    if ( isAuth ) return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="NewUU" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                        <Link to="/quiz" className='nav-link'>Quiz</Link>
                        <NavDropdown title="Courses" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#courses/3.1"> Course 1 </NavDropdown.Item>
                            <NavDropdown.Item href="#courses/3.2">
                                Another Course
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#courses/3.3"> Course #3 </NavDropdown.Item>
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
                            <NavDropdown.Item>ID: {user?.username}</NavDropdown.Item>
                            <NavDropdown.Item>Edit Profile <Icon.PencilSquare /></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="text-bold text-danger"
                            onClick={logout}
                            >
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