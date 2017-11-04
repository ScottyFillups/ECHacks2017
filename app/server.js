const http = require('http')
const express = require('express')
const app = express()
const server = http.Server(app)

const webserverPort = process.env.PORT || 8080
const io = require('socket.io')(server)
const routes = require('./routes/routes')

app.use(routes)

server.listen(webserverPort, () => {
  console.log(`Listening on port ${webserverPort}`)
})
