import React from 'react';
import {Link, useParams} from 'react-router-dom';
import '../../styles/blog.css';

const PostCard = (props) => {
  const post = props.post;
  const {id} = useParams();
  const date = new Date(post.createdAt)
  return(
    <div className="post-edit">
      <Link to={`/edit-post/${post._id}`}>
        <img src="images\edit-regular.svg" className="edit-button"></img>
      </Link>
      <div className="post">
        
        <h3 className="post-title">{post.title}</h3>
        <p className="date">{date.toDateString()}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;