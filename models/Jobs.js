const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  district: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  school: {
    type: String
  }
})