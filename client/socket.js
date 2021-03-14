import {create} from 'react-test-renderer'
import io from 'socket.io-client'

const socket = io(window.location.origin)

import store, {getScores, gotMessage, createUser, gotOnlineUsers} from './store'

socket.on('connect', () => {
  console.log('I am now connected to the server!')
  store.dispatch(createUser(socket.id))
})

socket.on('new-score', () => {
  store.dispatch(getScores())
})

socket.on('new-user', online => {
  console.log('got new user')
  store.dispatch(gotOnlineUsers(online))
})

socket.on('new-message', message => {
  store.dispatch(gotMessage(message))
})

export default socket
