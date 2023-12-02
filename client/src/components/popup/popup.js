//import React from'react'
import './popup.css'

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from '../navbar/navbar';
import App from '../../App';
//import {nav} from '../navbar/navbar.css';

export default function Popup(props) {


    const[redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
  
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
        await axios.get("http://localhost:4000/*").then(response => {
          // handle successful response
          return response.data;
        })
        .catch(error => {
          // handle error
          console.log(error);
          return null;
        });
        //const targetWindow = window.get(App.Navbar);
        
        //Navbar.postMessage('modify', '*');
        
        const element = document.querySelector(".nav-links-admins");
        //element.setAttribute.

      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  
//DO WE ADD SIGNUP, if so add right before end of form
    return(props.trigger) ? (
        <div class='popup'>
            <div class='popup-inner'>
                <div>
                    <h1>Admin Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label for="email">Username/Email: &ensp;</label>
                        <input type="email" id="email"  name="email" value={email} placeholder="Enter your email" onChange={handleOnChange}/><br></br>
                        <br></br>
                        <label for="pass">Password:  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</label>
                        <input type="password" id="pass" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange}/><br></br>
                        <br></br><br></br>
                        <input type="submit" value="Submit" class='submit-btn'></input>
                        
                        
                    </form>
                    
                </div>
                <button class="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                
                {props.children}
                
            </div>
            <ToastContainer/>
        </div>
        
    ) : "";
}