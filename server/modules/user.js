var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name: {
    type: String,
    require: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    minlength: 1
  },
  password: {
    type: String,
    require: true,
    minlength: 1,
    trim: true 
  }
});

module.exports = {User};