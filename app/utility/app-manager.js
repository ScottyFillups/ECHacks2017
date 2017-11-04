const canRaid = require('./raid-checker')

function appManager (io, db)
  io.on('connection', (socket) => {
    socket.on('identify', (uuid) => {

    })
    socket.on('update', (uuid, userPos) => {
      //bases = redisManager.getBases something 
      canRaid(userPos, bases)
    })
    socket.on('raid', () => {

    })
    socket.on('makeBase', (uuid, userPos) => {

    })
  })
}

module.exports = appManager
