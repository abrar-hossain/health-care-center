import React from 'react';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Navbars = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className='header'>
                <div>
                    <h3>Medilink <br /> Health Care Center </h3>
                </div>
                <div>
                    <nav>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        {user.email && <span style={{ color: 'white' }}>hello {user.displayName}</span>}
                        {user.email ? <button onClick={logOut}>LogOut</button> :
                            <NavLink to="/login">Login</NavLink>}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbars;