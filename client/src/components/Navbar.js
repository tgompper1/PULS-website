import React, { useState, useEffect} from 'react'
// We import bootstrap to make our application look better.
import '../styles/navbar.css'
import './twelve_column_grid.css'
import { FaBars, FaTimes } from 'react-icons/fa'

import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [click, setClick] =  useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    }, []);
 return (
   <div class="col-12 col-s-12">
     <nav className="navbar">
       <NavLink className="navbar-logo" to="/">
            <img src="images\logo\logo_color.png" width={120} height={80}></img>
       </NavLink>
        <div className="navbar-container container" id="navbarSupportedContent">
            <div className = 'menu-icon' onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars />}
            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                {/* <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/about" onClick={closeMobileMenu}>
                        ABOUT
                    </NavLink>
                </li> */}
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/admin-blog" onClick={closeMobileMenu}>
                        ADMIN BLOG
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/blog" onClick={closeMobileMenu}>
                        BLOG
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/admin-calendar" onClick={closeMobileMenu}>
                        ADMIN CALENDAR
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/calendar" onClick={closeMobileMenu}>
                        CALENDAR
                    </NavLink>
                </li>
            </ul>
       </div>
     </nav>
   </div>
 );
}