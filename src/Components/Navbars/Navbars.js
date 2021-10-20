import React from 'react';
import './Navbars.css';
import { NavLink } from "react-router-dom";
import {
    Container, Nav,
    Navbar as Appbar,
    Stack
} from "react-bootstrap";
import useAuth from '../../hooks/useAuth';

const Navbars = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Appbar bg="dark" variant="dark" expand="lg">
                <h4 className="text-danger bg-dark">Medilink <br /> Health Care Center </h4>
                <Container fluid>
                    <Appbar.Toggle aria-controls="navbarScroll" />
                    <Appbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 pe-5"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Stack direction="horizontal" gap={5} className='nav'>
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: 'none'
                                    }}
                                    style={{ textDecoration: 'none' }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: 'none',
                                    }}
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}
                                >
                                    Services
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                    }}
                                >
                                    Contact
                                </NavLink>
                                {user.email && <span style={{ color: 'white' }}>hello {user.displayName}</span>}
                                {user.email ? <button onClick={logOut}>LogOut</button> :
                                    <NavLink to="/login">Login</NavLink>}
                            </Stack>
                        </Nav>
                    </Appbar.Collapse>
                </Container>
            </Appbar>
        </div>
    );
};

export default Navbars;