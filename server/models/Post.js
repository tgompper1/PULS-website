const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  photo:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = Post = mongoose.model('post', PostSchema);