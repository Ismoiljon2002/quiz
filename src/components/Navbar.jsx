import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { FaPenFancy } from 'react-icons/fa';
import { ImSwitch } from 'react-icons/im'
import './style/Navbar.css';
import i from '../img/i.jpg';
import logo from '../img/logo.jfif';

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
                    <img src={logo} alt="NewUU" draggable="false" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/dashboard" className='nav-link'>Dashboard</Link>
                        <Link to="/quiz" className='nav-link'>Quiz</Link>
                    </Nav>

                    <Nav className="justify-content-end">

                        <NavDropdown title={
                            <div className="navbar-user-img">
                                <img src={i} alt=""  draggable="false" />
                            </div>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item>ID: {user?.username}</NavDropdown.Item>
                            <NavDropdown.Item>
                                <FaPenFancy/>
                                Edit Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout} style={{ background: "red", color: "#fff", fontWeight: 600 }}>
                                <ImSwitch /> LOGOUT 
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;