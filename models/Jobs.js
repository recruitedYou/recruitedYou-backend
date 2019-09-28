const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobSchema = new Schema({
  district: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  school: {
    type: String,
    required: true,
    min: 2,
    max: 5
  },
  grade: {
    type: Number,
    required: true,
    min: 1,
    max: 13
  },
  subject: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  date: {
    type: Date,
    default: Date.now
  }
})
const Job = mongoose.model('Job', JobSchema)
module.exports = Job