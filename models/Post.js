const mongoose = require('mongoose')
const PostScherma = mongoose.Schema({
  title:{
      type:String,
      required:true
  },
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:Date.now
  },
})

module.exports = mongoose.model('Post',PostScherma)