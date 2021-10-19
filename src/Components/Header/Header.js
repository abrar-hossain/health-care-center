import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className='header'>
                <div>
                    <h3>Medilink Hospital</h3>
                </div>
                <div>
                    <nav>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        {user.email && <span style={{ color: 'white' }}>hello {user.displayName}</span>}
                        {user.email ? <button onClick={logOut}>LogOut</button> :
                            <NavLink to="/login">Login</NavLink>}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;