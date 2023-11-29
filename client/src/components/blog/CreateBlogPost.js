import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBlogPost = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8001/api/posts', post)
      .then((res) => {
        setPost({
          title: '',
          body: '',
        });

        // Push to /blog
        navigate('/blog');
      })
      .catch((err) => {
        console.log('Error in CreateBlogPost');
      });
  };

  return (
    <div className="container">
      <div>
        <div>
          <div>
            <br />
            <Link to='/blog'>
              Back to Blog List
            </Link>
          </div>
          <div>
            <h1>Add Post</h1>

            <form noValidate onSubmit={onSubmit}>
              <div>
                <input
                  type='text'
                  placeholder='Title of BlogPost'
                  name='title'
                  value={post.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='text here'
                  name='body'
                  className='form-control'
                  value={post.body}
                  onChange={onChange}
                />
              </div>

              <input type='submit'/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogPost;