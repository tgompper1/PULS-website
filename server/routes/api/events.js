const express = require('express');
const router = express.Router();

// load Post model
const Event = require('../../models/Event');


// @route GET api/events
router.get('/', (req,res) => {
  Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(404).json({nopostsfound:'No Events found'}));
});

// @route GET api/events
// @description add event
// @access Admin
router.post('/', (req,res) => {
  Event.create(req.body)
    .then(event => res.json({msg: 'Event added successfully'}))
    .catch(err => res.status(400).json({error:'Unable to add this event'}));
})

// @route GET api/events/:id
// @description Delete post by id
// @access Admin
router.delete('/:id', async (req, res) => {
  try{
     await Event.findByIdAndDelete(req.params.id);
    return res.status(200).json({ success: true, msg: "success"});
  }
  catch(err){
      console.error(err);
  }
});
module.exports = router;