import React, {useCallback} from 'react'
import NavBar from './NavBar'
const text = require('../../text')
import Preview from './Preview'
import Score from './Score'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      textToType: text,
      words: [],
      submission: '',
      correctCount: 0,
      idx: 0,
      started: false,
      startTime: null,
      wpm: null,
      sec: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      started: true
    })
    this.startTimer()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sec !== this.state.sec) {
      console.log('incomponentdidupdate', prevProps.sec, this.state.sec)
      if (this.state.sec > 60) {
        clearInterval(this.interval)
      }
    }
  }

  wordsPerMinute(chars, ms) {
    return Math.floor(chars / 5 / (ms / 6000))
  }

  checkFinished() {
    console.log('in check finished')
    if (this.state.idx + 1 === this.state.words.length) {
      if (this.state.startTime) {
        const ms = new Date().getTime() - this.state.startTime.getTime()
        const wpm = this.wordsPerMinute(this.state.textToType.length, ms)
        this.setState({wpm})
      }
    }
  }

  startTimer() {
    if (!this.state.started) {
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      }, 1000)
    }
  }

  correctCount(input) {
    const compare = this.state.textToType
      .split('')
      .map(char => (char === ' ' ? '' : char))
    const correctCount = input
      .split('')
      .map(char => (char === ' ' ? '' : char))
      .filter((char, idx) => char === compare[idx]).length
    return correctCount
  }

  handleChange(evt) {
    const input = evt.target.value
    this.setState({
      submission: input,
      correctCount: this.correctCount(input)
    })
  }

  render() {
    const handleChange = this.handleChange
    const idx = this.state.idx
    return (
      <div className="home-view">
        <NavBar user={this.props.user} />
        {this.state.sec >= 60 ? (
          <Score correct={this.state.correctCount} />
        ) : (
          <div className="game-view">
            <div className="timer">{this.state.sec}</div>

            <Preview
              text={this.state.textToType}
              submission={this.state.submission}
            />

            <input
              type="text"
              name="submission"
              value={this.state.submission}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Game
