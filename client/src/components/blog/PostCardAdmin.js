import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './blog.css';

const PostCard = (props) => {
  const post = props.post;
  const {id} = useParams();

  return(
    <div class="post">
      <Link to={`/edit-post/${post._id}`}>
        Edit
      </Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;