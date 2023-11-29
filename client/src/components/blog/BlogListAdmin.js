import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostCardAdmin from './PostCardAdmin';
import '../twelve_column_grid.css'
import '../../styles/blog.css';

function AdminBlogList(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:8001/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBlogList');
      });
  }, []);

  const blogList = 
    posts.length === 0
      ? 'there is no post record'
      : posts.map((post, k) => <PostCardAdmin post={post} key={k} />);
  
  return (
    <div>
      <Link to="/create-post" className="button"> + ADD POST </Link>
      {blogList}
    </div>
  );
}

export default AdminBlogList;