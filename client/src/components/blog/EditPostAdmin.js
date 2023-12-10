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
        console.log('Updated post successfully');
      })
      .catch((err) => {
        console.log('Error in EditPostAdmin');
      });
    
      navigate('/blog-admin');
  };

  // get spotlight post id
  useEffect(()=>{
    axios.get('http://localhost:8001/api/settings/spotlight')
    .then((res) =>{
      localStorage.setItem("spotlightPostID", JSON.stringify(res.data.spotlightID));
    })
    .catch(() =>{
      localStorage.setItem("spotlightPostID", JSON.stringify([]));
    });
  });

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

  const addRemoveSpotlight =
    JSON.parse(localStorage.getItem("spotlightPostID")).length === 0
    ? <Link to='/blog-admin' className="button" onClick={() => onStarClick()}>
        Star
      </Link>
    : <Link  to= '/blog-admin' onClick={deleteSpotlight} className="button">
        Remove Spotlight
      </Link>

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
      <Link to='/blog-admin' className="button">
        Back
      </Link>

      <Link to='/blog-admin' className="button" onClick={() => onDeleteClick()}>
        Delete
      </Link>

      {addRemoveSpotlight}

      <h2>Edit Post</h2>

      <form noValidate onSubmit={onSubmit}>
        <div className='input-element'>
          <label>Title (max 100 characters): </label>
          <br />
          <input
            type='text'
            className='text-input'
            placeholder='Title'
            name='title'
            maxlength="100"
            value={post.title}
            onChange={onChange}
          />
        </div>
        <br />

        <div className='input-element'>
          <label>Summary (200 characters max): </label>
          <br />
          <textarea
            type='text'
            className="text-input"
            placeholder='Blog Post Summary'
            name='summary'
            maxlength="200"
            value={post.summary}
            onChange={onChange}
          />
        </div>
        <br />

        <div className='input-element'>
          <label>Body: </label>
          <br />
          <ReactQuill
            name='body'
            value={post.body} 
            onChange={(newValue) =>{
              setPost({...post, ["body"]: newValue});}}
          />
        </div>
        <br />

        <input type='submit' onSubmit={onSubmit} className="button" value="Update Post"/>
      </form>
    </div>

  );
}

export default EditPostAdmin;