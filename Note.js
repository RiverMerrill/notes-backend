const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  date: String,
  title: String,
  body: String
});

module.exports = mongoose.model('Note', schema);
