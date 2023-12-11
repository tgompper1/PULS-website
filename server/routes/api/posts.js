const express = require('express');
const router = express.Router();
const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'public/images');
  },
  filename: function(req, file, cb){
    cb(null, uuidv4() + '-' + Date.now());
  }
})

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg','image/png'];
  if (allowedFileTypes.includes(file.mimetype)){
    cb(null, true);
  } else {
    cb(null, false);
  }
}

let upload = multer({storage, fileFilter});

// load Post model
const Post = require('../../models/Post');

// test route
router.get('/blog', (req, res) => res.send('post route testing!'));


// @route GET api/posts
router.get('/', (req,res) => {
  Post.find()
    .sort({createdAt: -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({nopostsfound:'No Posts found'}));
});

// @route GET api/posts/:id
// @description Get single post by id
// @access Public
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'No Post found' }));
});

// @route GET api/posts
// @description add post
// @access Admin
router.post('/', upload.single('photo'), (req,res) => {
  try{
    let postData = {
      title: req.body.title,
      summary: req.body.summary,
      body: req.body.body,
      photo: req.file.filename
    }
    Post.create(postData)
    .then(post => res.json({msg: 'Post added successfully'}))
    .catch(err => res.status(400).json({error:'Unable to add this post'}));
  }catch{
    
  }
})


// @route GET api/posts/:id
// @description Update post
// @access Admin
router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/posts/:id
// @description Delete post by id
// @access Admin

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    .then(post => {
      fs.unlink(`public/images/${post.photo}`, (err) => console.log(err))
      res.json({ mgs: 'Post deleted successfully' })
    })
    .catch(err => res.status(404).json({ error: 'No such post' }));
});

module.exports = router;