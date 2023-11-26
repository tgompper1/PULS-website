import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import './blog.css';
import '../twelve_column_grid.css';

export default function Blog(blog) {
  
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  // This following section will display 
  return (
    <div class="container">
      <h1>{message}</h1>
    </div>
 );
}