const http = require('http')
const express = require('express')
const app = express()
const server = http.Server(app)
const mongoose = require('mongoose')

const webserverPort = process.env.PORT || 8080
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/db'
const io = require('socket.io')(server)
const routes = require('./routes/routes')

app.use(routes)
mongoose.connect(mongoURL)

const db = mongoose.connection
const appManager = require('./utiliy/app-manager')

appManager(io, db)

server.listen(webserverPort, () => {
  console.log(`Listening on port ${webserverPort}`)
})
