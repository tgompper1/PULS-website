import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditPostAdmin(props) {
  const [post, setPost] = useState({
    title: '',
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
      <div>
        <div>
          <div>
            <br />
            <Link to='/blog-admin' className="button">
              Back to Blog List
            </Link>

            <Link to='/blog-admin' className="button" onClick={() => onDeleteClick()}>
              Delete Post
            </Link>
          </div>
          <div>
            <h1>Edit Post</h1>
          </div>
        </div>

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

            <div>
              <h4>Post Body</h4>
              <textarea
                name='body'
                value={post.body} 
                onChange={onChange} 
              />
            </div>
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