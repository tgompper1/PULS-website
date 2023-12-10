const express = require('express');
const router = express.Router();

// load Settings model
const Settings = require('../../models/Settings');


// @route GET api/settings/spotlight
// @description get spotlight ID
// @access Admin
router.get('/spotlight', (req, res) => {
  Settings.findOne(req.params.id)
    .then(str => {
      res.json(str);
    })
    .catch(err =>{
      res.status(400).json({ error: 'Unable to find spotlight id' });
    });
});

// @route GET api/settings/spotlight/:id
// @description update spotlight ID
// @access Admin
router.put('/spotlight/:id', (req, res) => {
  Settings.findOneAndUpdate(req.body)
    .then(str => res.json({ msg: 'Spotlight Updated successfully' }))
    .catch(err =>{
      res.status(400).json({ error: 'Unable to update spotlight' })
    }
    );
});

module.exports = router;