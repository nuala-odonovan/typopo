import axios from 'axios'
import history from '../history'
import socket from '../socket'

/**
 * ACTION TYPES
 */
const CREATE_USER = 'CREATE_USER'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
export const createUser = socketId => ({type: CREATE_USER, socketId})
export const updateUser = name => ({type: UPDATE_USER, name})

/**
 * REDUCER
 */

//es-lint disable no-case-declarations
export default function(state = defaultUser, action) {
  switch (action.type) {
    case CREATE_USER:
      return {socketId: action.socketId}
    case UPDATE_USER:
      return {...state, username: action.name}
    default:
      return state
  }
}
