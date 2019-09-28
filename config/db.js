const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connectt(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log(`MongoDB connected`)
  } catch (error) {
    console.error(error.message)
    console.log(`Connect Error`)
  }
}

module.exports = connectDB