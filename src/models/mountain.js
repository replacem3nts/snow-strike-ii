const mongoose = require('mongoose');

const mountainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
});

const Mountain = mongoose.model('Mountain', mountainSchema);

module.exports = Mountain;
