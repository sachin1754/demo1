const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/javascriptbackend1")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    
  },
  fullname: {
    type: String,
    required: true,
  },
  dp: {
    type: String, 
  },
  posts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  email:{
    type: String,

  }
});

userSchema.plugin(plm)
module.exports = mongoose.model('User', userSchema);


