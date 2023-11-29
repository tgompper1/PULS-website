const express = require('express');
const router = express.Router();

// load Post model
const Event = require('../../models/Event');

// test route
router.get('/blog', (req, res) => res.send('post route testing!'));


// @route GET api/posts
router.get('/', (req,res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({nopostsfound:'No Events found'}));
});

// @route GET api/posts
// @description add event
// @access Admin
router.post('/', (req,res) => {
  Event.create(req.body)
    .then(event => res.json({msg: 'Event added successfully'}))
    .catch(err => res.status(400).json({error:'Unable to add this event'}));
})

// // @route GET api/posts/:id
// // @description Update post
// // @access Admin
// router.put('/:id', (req, res) => {
//   Post.findByIdAndUpdate(req.params.id, req.body)
//     .then(post => res.json({ msg: 'Updated successfully' }))
//     .catch(err =>
//       res.status(400).json({ error: 'Unable to update the Database' })
//     );
// });

// @route GET api/posts/:id
// @description Delete post by id
// @access Admin
// router.delete('/:id', (req, res) => {
//   Event.findByIdAndRemove(req.params.id, req.body)
//     .then(post => res.json({ mgs: 'Event deleted successfully' }))
//     .catch(err => res.status(404).json({ error: 'No such event' }));
// });

module.exports = router;