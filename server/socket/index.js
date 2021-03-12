let users = []

module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    socket.on('join server', username => {
      const user = {
        username,
        id: socket.id
      }
      users.push(user)
      io.emit('new user', user)
    })
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
