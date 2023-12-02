import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';

function EditPostAdmin(props) {
  const [post, setPost] = useState({
    title: '',
    summary: '',
    body: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // get the post by id
  useEffect(() => {
    axios
      .get(`http://localhost:8001/api/posts/${id}`)
      .then((res) => {
        setPost({
          title: res.data.title,
          summary: res.data.summary,
          body: res.data.body,
        });
      })
      .catch((err) => {
        console.log('Error from EditPostAdmin');
      });
  }, [id]);

  const originalPhoto = post.photo

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // apply the changes on submit
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('summary', post.summary);
    formData.append('body', post.body);

    axios
      .put(`http://localhost:8001/api/posts/${id}`, formData)
      .then((res) => {
        navigate(`/blog-admin`);
      })
      .catch((err) => {
        console.log('Error in EditPostAdmin');
      });
  };

  // delete the post
  const onDeleteClick = () => {
    const r = window.confirm("Delete post?");
    if (r){
      axios
      .delete(`http://localhost:8001/api/posts/${id}`)
      .then((res) => {
        navigate('/blog-admin');
      })
      .catch((err) => {
        console.log('Error form EditPostAdmin_deleteClick');
      });
    }
  };


  return (
    <div>
      <div className="page-content">
        <Link to='/blog-admin' className="nav-button">
          Back to Blog List
        </Link>

        <Link to='/blog-admin' className="nav-button" onClick={() => onDeleteClick()}>
          Delete Post
        </Link>
        <h1>Edit Post</h1>

        <form noValidate onSubmit={onSubmit}>

          <h4>Title</h4>
          <input
            type='text'
            placeholder='Blog Post Title'
            name='title'
            value={post.title}
            onChange={onChange}
          />

          <h4>Summary</h4>
          <input
            type='text'
            placeholder='Blog Post Title'
            name='summary'
            value={post.summary}
            onChange={onChange}
          />

          <div>
            <h4>Post Body</h4>
            <ReactQuill
                type='text'
                name='body'
                value={post.body}
                onChange={(newValue) =>{
                  setPost({...post, ["body"]: newValue});}}
              />
          </div>
          <br />

          <button type='submit' className="button">
            Update Post
          </button>
        </form>

      </div>
    </div>
  );
}

export default EditPostAdmin;