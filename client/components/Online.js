import React from 'react'
import {connect} from 'react-redux'

const Online = props => {
  const {online} = props

  return (
    <div className="online">
      <p>ONLINE</p>
      {online.map(user => <p key={user.socketId}>{user.username}</p>)}
    </div>
  )
}

const mapState = state => {
  return {
    online: state.online
  }
}

export default connect(mapState)(Online)
