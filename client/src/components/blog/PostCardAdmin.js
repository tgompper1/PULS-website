import React from 'react';
import {Link, useParams} from 'react-router-dom';
import '../../styles/blog.css';

const PostCard = (props) => {
  const post = props.post;
  const {id} = useParams();
  const date = new Date(post.createdAt)
  return(
    <div class="post">
      <Link to={`/edit-post/${post._id}`}>
        Edit
      </Link>
      <h3 className="post-title">{post.title}</h3>
      <p>{post.body}</p>
      <p>{date.toDateString()}</p>
    </div>
  );
};

export default PostCard;