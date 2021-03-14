const GOT_ONLINE_USERS = 'GOT_ONLINE_USERS'

export const gotOnlineUsers = online => {
  return {
    type: GOT_ONLINE_USERS,
    online
  }
}
const defaultState = []

export default function(state = defaultState, action) {
  switch (action.type) {
    case GOT_ONLINE_USERS:
      return action.online
    default:
      return state
  }
}
