const express = require('express')
const path = require('path')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(express.json({extended: false}))

app.use('/', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3001
app.listen(port, ()=> console.log(`Listening on port: ${port}`))