import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import Navbars from '../Navbars/Navbars';

const Header = () => {
    /* const { user, logOut } = useAuth(); */
    return (
        <div>
            <Navbars></Navbars>
        </div>
    );
};

export default Header;