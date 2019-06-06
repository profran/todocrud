const mongoose = require('mongoose')

// Define a schema
const Schema = mongoose.Schema
const TodoSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: false
  },
  desc: {
    type: String,
    trim: true,
    required: true
  },
  userId: {
    type: String,
    trim: true,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
