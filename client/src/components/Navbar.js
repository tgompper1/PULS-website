import React from "react";
// We import bootstrap to make our application look better.
import '../styles/navbar.css'
import './twelve_column_grid.css'
import { useLogout } from "../hooks/useLogout";

import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
export default function Navbar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const handleClick = () => {
        if(user != null)
        {
        logout()
        }
      };
 return (
   <div class="col-12 col-s-12">
     <nav className="navbar">
       <NavLink className="navbar-logo" to="/">
            <img src="images\logo\logo_color.png" width={120} height={80}></img>
       </NavLink>
       
                    <NavLink className="nav-link nav-links my-nav-item nav-item nav-Leftmenu" onClick={handleClick} style={{ visibility: user ? 'visible' : 'hidden' }}>
                        LOGOUT
                    </NavLink>
               
        <div className="navbar-container container" id="navbarSupportedContent">
            
            <ul className='nav-menu'>
                <li className={user ? "nav-item my-nav-item": ""}>
                    <NavLink className="nav-link nav-links" to="/admin_calendar" style={{ visibility: user ? 'visible' : 'hidden' }}>
                        ADMIN CALENDAR
                    </NavLink>
                </li>
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
                {/* <li className="nav-item my-nav-item">
                    <NavLink className="nav-link nav-links" to="/admincalendar">
                        ADMIN CALENDAR
                    </NavLink>
                </li> */}
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