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

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // apply the changes on submit
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: post.title,
      summary: post.summary,
      body: post.body,
    };

    axios
      .put(`http://localhost:8001/api/posts/${id}`, data)
      .then((res) => {
        navigate(`/blog-admin`);
      })
      .catch((err) => {
        console.log('Error in EditPostAdmin');
      });
  };

  const deleteSpotlight = () => {
    axios
    .delete(`http://localhost:8001/api/settings/spotlight`)
    .then((res) => {
      console.log('successfuly removed old spotlight post');
    })
    .catch((err) => {
      console.log('Error form EditPostAdmin_starClick');
    });
  }

  // delete post
  const onDeleteClick = () => {
    const r = window.confirm("Delete post?");
    if (r){
      if (String(id) === JSON.parse(localStorage.getItem("spotlightPostID"))){
        deleteSpotlight();
      }
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


  // star post
  const onStarClick = () => {
    deleteSpotlight();

    // add star post
    axios
    .post(`http://localhost:8001/api/settings/spotlight/`, {id})
    .then((res) => {
      console.log('Successfully added spotlight')
    })
    .catch((err) =>{
      console.log('Error form EditPostAdmin_starClick');
    })
  };

  return (
    <div>
      <div className='page-content'>
        <Link to='/blog-admin' className="nav-button">
          Back to Blog List
        </Link>

        <Link to='/blog-admin' className="nav-button" onClick={() => onDeleteClick()}>
          Delete Post
        </Link>

        <Link to='/blog-admin' className="nav-button" onClick={() => onStarClick()}>
          Star
        </Link>
  
        <h1>Edit Post</h1>

        <div>
          <form noValidate onSubmit={onSubmit}>
            <div>
              <h4>Title</h4>
              <input
                type='text'
                placeholder='Blog Post Title'
                name='title'
                value={post.title}
                onChange={onChange}
              />
            </div>
            <br />

            <h4>Summary</h4>
              <input
                type='text'
                placeholder='Blog Post Summary'
                name='summary'
                maxlength="200"
                value={post.summary}
                onChange={onChange}
              />
            <br />

            <div>
              <h4>Post Body</h4>
              <ReactQuill
                name='body'
                value={post.body} 
                onChange={(newValue) =>{
                  setPost({...post, ["body"]: newValue});}}
              />
            </div>
            <br />

            <button type='submit' onSubmit={onSubmit} className="button">
              Update Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPostAdmin;