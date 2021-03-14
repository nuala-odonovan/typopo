const Score = require('../db')

let online = []

module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id, ' has made a persistent connection to the server!')

    socket.on('new-user', user => {
      online.push(user)
      io.emit('new-user', online)
    })

    socket.on('new-score', () => {
      socket.broadcast.emit('new-score')
    })

    socket.on('new-message', message => {
      socket.broadcast.emit('new-message', message)
    })

    socket.on('disconnect', () => {
      online = online.filter(user => user.socketId !== socket.id)
      socket.broadcast.emit('new-user', online)
    })
  })
}
