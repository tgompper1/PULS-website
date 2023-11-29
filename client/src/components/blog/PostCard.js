import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/blog.css';
const PostCard = (props) => {
  const post = props.post;
  const date = new Date(post.createdAt)
  return(
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p>{post.body}</p>
      <p>{date.toDateString()}</p>
    </div>
  );
};

export default PostCard;