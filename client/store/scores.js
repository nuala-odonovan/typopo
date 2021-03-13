import axios from 'axios'
import socket from '../socket'

const GET_TOP_SCORES = 'GET_TOP_SCORES'

const _gotScores = scores => {
  return {
    type: GET_TOP_SCORES,
    scores
  }
}

export const getScores = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/scores/top')
      dispatch(_gotScores(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const addScore = score => {
  return async dispatch => {
    try {
      const res = await axios.put('/api/scores', score)
      console.log('in add score', res.status)
      if (res.status === 200) {
        dispatch(getScores())
      }
      socket.emit('new-score')
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_SCORES:
      return action.scores
    default:
      return state
  }
}
