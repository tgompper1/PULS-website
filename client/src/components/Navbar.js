import React from "react";
// We import bootstrap to make our application look better.
import '../styles/navbar.css'
import './twelve_column_grid.css'

// import "bootstrap/dist/css/bootstrap.css";
 // We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 // Here, we display our Navbar
export default function Navbar() {
 return (
   <div class="col-12 col-s-12">
     <nav className="navbar">
       <NavLink className="navbar-logo" to="/">
            {/* <img style={{"width" : 40 + '%'}} src="images\logo_color.png"></img> */}
            <img src="images\logo_color.png" width={120} height={80}></img>
       </NavLink>
        <div className="navbar-container container" id="navbarSupportedContent">
            <ul className='nav-menu'>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/about">
                        ABOUT
                    </NavLink>
                </li>
                <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/blog">
                        BLOG
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