import React from "react";
// We import bootstrap to make our application look better.
import '../styles/navbar.css'
import './twelve_column_grid.css'

import { NavLink } from "react-router-dom";
export default function Navbar() {
 return (
   <div class="col-12 col-s-12">
     <nav className="navbar">
       <NavLink className="navbar-logo" to="/">
            <img src="images\logo\logo_color.png" width={120} height={80}></img>
       </NavLink>
        <div className="navbar-container container" id="navbarSupportedContent">
            <ul className='nav-menu'>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/about">
                        ABOUT
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/blog-admin">
                        ADMIN BLOG
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/blog">
                        BLOG
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/admincalendar">
                        ADMIN CALENDAR
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/calendar">
                        CALENDAR
                    </NavLink>
                </li>
            </ul>
       </div>
     </nav>
   </div>
 );
}