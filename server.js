
const cors = require('cors')

const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(cors());



const routes = require('./router/user.router')
app.use(express.json());
app.use('/api', routes)

require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.get('/',(req, res)=>{

    res.send("post-new")
    })
 

app.listen(4000)


