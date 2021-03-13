import io from 'socket.io-client'

const socket = io(window.location.origin)

import store, {getScores} from './store'

socket.on('connect', () => {
  console.log('I am now connected to the server!')
})

socket.on('new-score', () => {
  store.dispatch(getScores())
})

export default socket
