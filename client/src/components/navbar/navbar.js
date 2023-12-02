import { NavLink } from "react-router-dom";
import React, { useEffect, useState, useContext} from "react";
import './navbar.css';
import '../twelve_column_grid.css';


import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const show = false;


export default function Navbar() {
    //const [tabs, setTabs] = useState(null);
    /*
    useEffect(() => {
        axios.get('http://localhost:4000/session', {
            withCredentials: true,
        }).then(response => {
            setTabs(response.resave);
        }).catch(error => {
            console.error(error);
        });
    }, []);*/
    function setTabs()
    {
        const element = document.getElementById("adminCalendar");
            element.hidden = false;
    }
    window.addEventListener('message', event => {
        if(event.data === 'modify')
        {
            const element = document.getElementById("adminCalendar");
            element.hidden = false;
        }
    });
    /*
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
      });
    });
  }, []);
  */
 return (
   <div class="col-12 col-s-12">
     <nav className="navbar">
       <NavLink className="navbar-logo" to="/">
            <img src="images\logo\logo_color.png" width={120} height={80}></img>
       </NavLink>
        <div className="navbar-container container" id="navbarSupportedContent">
            <ul className='nav-menu'>
               
                         <li className="nav-item my-nav-item" hidden="true" >
                            <NavLink className="nav-link nav-links nav-links-admins" to="/admincalendar">
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
