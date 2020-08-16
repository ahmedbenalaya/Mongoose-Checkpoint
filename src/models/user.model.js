let mongoose = require('mongoose')
let validator = require('validator')
let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,

  },

   age :  Number,
  
   favoriteFoods : Array
})
module.exports = mongoose.model('users', userSchema)