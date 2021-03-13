const Score = require('../db')

module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id, ' has made a persistent connection to the server!')

    socket.on('new-score', () => {
      socket.broadcast.emit('new-score')
    })

    socket.on('new-message', message => {
      socket.broadcast.emit('new-message', message)
    })
  })
}
