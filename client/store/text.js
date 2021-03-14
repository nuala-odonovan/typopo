import axios from 'axios'

const GOT_TEXT = 'GOT_TEXT'

const gotText = text => {
  return {
    type: GOT_TEXT,
    text
  }
}

export const getText = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/text/${id}`)
      dispatch(gotText(res.data))
    } catch (err) {
      console.log(err)
    }
  }
}

const defaultState = ''

export default function(state = defaultState, action) {
  switch (action.type) {
    case GOT_TEXT:
      return action.text
    default:
      return state
  }
}
