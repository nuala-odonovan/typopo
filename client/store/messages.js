import socket from '../socket'

const ADD_MESSAGE = 'ADD_MESSAGE'
const GOT_MESSAGE = 'GOT_MESSAGE'

export const addMessage = message => {
  socket.emit('new-message', message)
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const gotMessage = message => {
  return {
    type: GOT_MESSAGE,
    message
  }
}

const defaultState = []

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [action.message, ...state]
    case GOT_MESSAGE:
      return [action.message, ...state]
    default:
      return state
  }
}
