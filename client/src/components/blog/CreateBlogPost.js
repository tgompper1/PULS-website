import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useNavigate } from 'react-router-dom';

const CreateBlogPost = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    body: '',
    photo: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('summary', post.summary);
    formData.append('body', post.body);
    formData.append('photo', post.photo);

    axios
      .post('http://localhost:8001/api/posts', formData)
      .then((res) => {
        setPost({
          title: '',
          summary: '',
          body: '',
          photo: '',
        });

        // Push to /blog
        navigate('/blog-admin');
      })
      .catch((err) => {
        console.log('Error in CreateBlogPost');
      });
  };

  return (
    <div>
      <div>
        <div className='page-content'>
          <Link to='/blog-admin' className="nav-button">
            Back to Blog List
          </Link>
          <h2>Add Post</h2>

          <form noValidate onSubmit={onSubmit}>
            <div>
              <input
                className="text-input"
                type='text'
                placeholder='Title'
                name='title'
                value={post.title}
                onChange={(e) => setPost({ ...post, [e.target.name]: e.target.value })}
              />
            </div>
            <br />
            <div>
              <input
                  className="text-input"
                  type='text'
                  placeholder='Summary'
                  name='summary'
                  value={post.summary}
                  onChange={(e) => setPost({ ...post, [e.target.name]: e.target.value })}
                />
            </div>
            <br />

            <input 
              type="file" 
              accept='.png, .jpg, .jpeg'
              name='photo' 
              onChange={e => setPost({ ...post, photo: e.target.files[0]})}>
            </input>
            <br />

            <div>
              <ReactQuill
                type='text'
                placeholder='text here'
                name='body'
                value={post.body}
                onChange={(newValue) =>{
                  setPost({...post, ["body"]: newValue});}}
              />
            </div>

            <input type='submit' className="button" value="Create Post" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPost;