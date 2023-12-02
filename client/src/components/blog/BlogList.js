import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostCard from './PostCard';
import '../twelve_column_grid.css'
import '../../styles/blog.css';

function BlogList(){
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
      : posts.map((post, k) => <PostCard post={post} key={k} />);
  
  return (
    <div>
      <h2 className="page-title">Latest News</h2>
      <div className="page-content">
        {blogList}
      </div>
    </div>
  );
}

export default BlogList;