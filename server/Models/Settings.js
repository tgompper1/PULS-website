const mongoose = require('mongoose');


const SettingsSchema = new mongoose.Schema({
  spotlightID: {
    type: String,
    required: true
  }
});

module.exports = Settings = mongoose.model('settings', SettingsSchema);