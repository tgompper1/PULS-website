import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import PostCard from './PostCard';
import SpotlightPostCard from './SpotlightPostCard';
import '../twelve_column_grid.css'
import '../../styles/blog.css';

function BlogList(){
  const [posts, setPosts] = useState([]);
  const [spotlightPostID, setSpotlightPostID] = useState([]);
  const [spotlightPost, setSpotlightPost] = useState({
    title: '',
    photo: '',
    body: '',
    summary: '',
    createdAt: ''
  });

  // get spotlight post id
  useEffect(()=>{
    axios.get('http://localhost:8001/api/settings/spotlight')
    .then((res) =>{
      localStorage.setItem("spotlightPostID", JSON.stringify(res.data.spotlightID));
    })
    .catch(console.log('Error in BlogList_getSpotlight'));
  });

  // get posts
  useEffect(()=>{
    axios
      .get('http://localhost:8001/api/posts')
      .then((res) => {
        setPosts(res.data.filter((post) => {
          return String(post._id) !== JSON.parse(localStorage.getItem("spotlightPostID"));
        }));
      })
      .catch((err) => {
        console.log('Error from BlogList');
      });
  }, []);

  // get spotlight post by id
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/posts/${JSON.parse(localStorage.getItem("spotlightPostID"))}`)
      .then((res) => {
        setSpotlightPost({
          _id: JSON.parse(localStorage.getItem("spotlightPostID")),
          title: res.data.title,
          photo: res.data.photo,
          body: res.data.body,
          summary: res.data.summary,
          createdAt:res.data.createdAt,
        });
      })
      .catch((err) => {
        console.log('Error from PostDetails');
      });
  }, [spotlightPostID]);

  const blogList = 
    posts.length === 0
      ? 'there is no post record'
      : posts.map((post, k) => <PostCard post={post} key={k} />);

  const post = 
    spotlightPost === undefined
    ? "no spotlight"
    : <SpotlightPostCard post={spotlightPost} key={JSON.parse(localStorage.getItem("spotlightPostID"))}/>;
  
  return (
    <div>
      <h1 className="page-title">Latest News</h1>
      <div>
        {post}
        {blogList}
      </div>
    </div>
  );
}

export default BlogList;