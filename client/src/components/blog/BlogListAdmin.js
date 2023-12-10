import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostCardAdmin from './PostCardAdmin';
import SpotlightPostCard from './SpotlightPostCard';
import '../twelve_column_grid.css'
import '../../styles/blog.css';

function AdminBlogList(){
  const [posts, setPosts] = useState([]);
  const [spotlightPostID, setSpotlightPostID] = useState([]);
  const [spotlightPost, setSpotlightPost] = useState([]);

  // get spotlight post id
  useEffect(()=>{
    axios.get('http://localhost:8001/api/settings/spotlight')
    .then((res) =>{
      setSpotlightPostID(res.data.spotlightID);
    })
    .catch((err) => {
      console.log('Error from BlogListAdmin');
    });
  });

  // get posts
  useEffect(()=>{
    axios
      .get('http://localhost:8001/api/posts')
      .then((res) => {
        setPosts(res.data.filter((post) => String(post._id) !== spotlightPostID));
        setSpotlightPost(res.data.filter((post) => {
          return String(post._id) === spotlightPostID
        }));

      })
      .catch((err) => {
        console.log('Error from BlogListAdmin');
      });
  }, []);


  const blogList = 
    posts.length === 0
      ? 'there is no post record'
      : posts.map((post, k) => <PostCardAdmin post={post} key={k} />);

  const headerPost = 
  spotlightPost === undefined
  ? "no spotlight"
  : spotlightPost.map((post, k) => <SpotlightPostCard post={post} key={k} />);
    

  return (
    <div>
      <Link to="/create-post" className="nav-button">ADD POST</Link>
      {blogList}
    </div>
  );
}

export default AdminBlogList;