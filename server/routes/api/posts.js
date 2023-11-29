const express = require('express');
const router = express.Router();

// load Post model
const Post = require('../../models/Post');

// test route
router.get('/blog', (req, res) => res.send('post route testing!'));


// @route GET api/posts
router.get('/', (req,res) => {
  Post.find()
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
router.post('/', (req,res) => {
  Post.create(req.body)
    .then(post => res.json({msg: 'Post added successfully'}))
    .catch(err => res.status(400).json({error:'Unable to add this post'}));
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
router.delete('/:id', (req, res) => {
  Post.findOneAndDelete(req.params.id)
    .then(post => res.json({ mgs: 'Post deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such post' }));
});

module.exports = router;