const express = require('express');
const router = express.Router();

// load Settings model
const Settings = require('../../models/Settings');


// @route GET api/settings/spotlight
// @description get spotlight ID
// @access Admin
router.get('/spotlight', (req, res) => {
  Settings.findOne(req.body.id)
    .then(str => {
      res.json(str);
    })
    .catch(err =>{
      res.status(400).json({ error: 'Unable to find spotlight id' });
    });
});

// @route GET api/settings/spotlight
// @description delete spotlight ID
// @access Admin
router.delete('/spotlight/', (req, res) => {
  Settings.findOneAndDelete(req.body)
    .then(str => res.json({ msg: 'Spotlight deleted successfully' }))
    .catch(err =>{
      res.status(400).json({ error: 'Unable to delete spotlight' })
    });
});

// @route GET api/settings/spotlight
// @description post spotlight ID
// @access Admin
router.post('/spotlight/', (req, res) => {
  let postData = {
    spotlightID: req.body.id,
  }
  Settings.create(postData)
    .then(str => res.json({ msg: 'Spotlight added successfully' }))
    .catch(err =>{
      res.status(400).json({ error: 'Unable to add spotlight' })
    });
});


module.exports = router;