import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostCardAdmin from './PostCardAdmin';
import '../twelve_column_grid.css'
import '../../styles/blog.css';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function AdminBlogList(){
  const { user } = useAuthContext();
  const navigate = useNavigate();
  if(user == null)
  {
    navigate("/");
  }



  const [posts, setPosts] = useState([]);

  // get posts
  useEffect(()=>{
    axios
      .get('http://localhost:8001/api/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log('Error from BlogListAdmin');
      });
  }, []);


  const blogList = 
    posts.length === 0
      ? ''
      : posts.map((post, k) => <PostCardAdmin post={post} key={k} />);

  
  return (
    <div>
      <h1>Blog</h1>
      
      <Link to="/create-post" className="button">
        Create
      </Link>

      {blogList}
    </div>
  );
}

export default AdminBlogList;