import io from 'socket.io-client'

const socket = io(window.location.origin)

import store, {getScores, gotMessage} from './store'

socket.on('connect', () => {
  console.log('I am now connected to the server!')
})

socket.on('new-score', () => {
  store.dispatch(getScores())
})

socket.on('new-message', message => {
  store.dispatch(gotMessage(message))
})

export default socket
