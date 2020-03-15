const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {
    type: String
  },
  job: {
    type: String
  }
});

module.exports = User = mongoose.model('user', user);
