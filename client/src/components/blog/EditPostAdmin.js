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
      <div className='page-content'>
        <Link to='/blog-admin' className="nav-button">
          Back to Blog List
        </Link>

        <Link to='/blog-admin' className="nav-button" onClick={() => onDeleteClick()}>
          Delete Post
        </Link>
  
        <h2>Edit Post</h2>

        <div>
          <form noValidate onSubmit={onSubmit}>
            <label>
              Title: <br />
              <input
              type='text'
              placeholder='Blog Post Title'
              name='title'
              className='text-input'
              value={post.title}
              onChange={onChange}
            />
            </label>
            <br></br>

            <label>
            Summary: <br />
            <input
                type='text'
                className='text-input'
                placeholder='Blog Post Summary'
                name='summary'
                value={post.summary}
                onChange={onChange}
              />
            </label>

            <br></br>

            <label>
              Body: <br /> <br/>
              <ReactQuill
                name='body'
                value={post.body} 
                onChange={(newValue) =>{
                  setPost({...post, ["body"]: newValue});}}
              />
            </label>
            <br />

            <button type='submit' className="button">
              Update Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPostAdmin;