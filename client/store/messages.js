import socket from '../socket'

const ADD_MESSAGE = 'ADD_MESSAGE'
const GOT_MESSAGE = 'GOT_MESSAGE'

export const _addMessage = message => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const gotMessage = message => {
  console.log('IN GOT MESSAGE')
  return {
    type: GOT_MESSAGE,
    message
  }
}

export const addMessage = message => {
  return async dispatch => {
    try {
      dispatch(_addMessage(message))
      socket.emit('new-message', message)
    } catch (err) {
      console.error(err)
    }
  }
}

const defaultState = []

export default function(state = defaultState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message]
    case GOT_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}
