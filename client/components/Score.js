import React from 'react'
import {connect, useStore} from 'react-redux'
import {addScore} from '../store'

class Score extends React.Component {
  componentDidMount() {
    const correct = this.props.correct
    const wpm = Math.floor(correct / 5)
    const lowestScore = this.props.scores[this.props.scores.length - 1].score
    if (wpm > lowestScore) {
      console.log('in component did mount', wpm, lowestScore)
      const score = {
        name: this.props.username,
        score: wpm
      }
      this.props.submit(score)
    }
  }

  render() {
    const correct = this.props.correct
    const wpm = Math.floor(correct / 5)
    const lowestScore = this.props.scores[this.props.scores.length - 1].score
    const highestScore = this.props.scores[0].score
    return (
      <div className="score-view">
        <h3>Your score:</h3>
        <h4>{wpm} wpm</h4>
        {wpm > lowestScore && wpm < highestScore ? <h3>New Top Five!</h3> : ''}
        {wpm >= highestScore ? <h3>New Top Score!!</h3> : ''}
      </div>
    )
  }
}

const mapState = state => {
  return {
    scores: state.scores,
    username: state.user.username
  }
}

const mapDispatch = dispatch => {
  return {
    submit: score => dispatch(addScore(score))
  }
}

export default connect(mapState, mapDispatch)(Score)
