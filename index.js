require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const routes = require('./src/routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Mongoose conected!')
    app.listen(PORT, () => console.log(`App Listening on http://localhost:${PORT}`))
  });


