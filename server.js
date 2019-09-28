const express = require('express')
const path = require('path')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(express.json({extended: false}))

app.get('/', (req, res)=> {
  res.send(`API RUNNIN`)
})

app.use('/users', require('./routes/users'))
app.use('/profile', require('./routes/profile'))
app.use('/auth', require('./routes/auth'))
app.use('/jobs', require('./routes/jobs'))

app.use('/', express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3001
app.listen(port, ()=> console.log(`Listening on port: ${port}`))