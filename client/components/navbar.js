import React from 'react'
import {connect} from 'react-redux'

const NavBar = props => {
  const {user, scores} = props

  return (
    <div className="sidenav">
      <h4>Welcome, {user.username}</h4>
      <div className="top-scores">
        <p>Top Scores</p>
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

const mapState = state => {
  return {
    user: state.user,
    scores: state.scores
  }
}

export default connect(mapState)(NavBar)
