import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import socket from '../socket'

class NavBar extends React.Component {
  componentDidMount() {
    const {user} = this.props
    console.log('in cpdm')
    socket.emit('new-user', user)
  }

  render() {
    const {user, scores} = this.props

    return (
      <div className="sidenav">
        <h4>Welcome, {user.username}</h4>
        <Link className="chat-link" to="/chat">
          Chat
        </Link>
        <Link className="play-link" to="/">
          Play
        </Link>
        <div className="top-scores">
          <p>Leaderboard</p>
          {scores.map(score => (
            <div key={score.id}>
              <p>{score.name}</p>
              <p>{score.score}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    scores: state.scores
  }
}

export default connect(mapState)(NavBar)
