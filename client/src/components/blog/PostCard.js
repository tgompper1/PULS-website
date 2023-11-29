import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/blog.css';
const PostCard = (props) => {
  const post = props.post;

  return(
    <div class="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;