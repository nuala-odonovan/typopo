import React from 'react'
import {getText} from '../store/text'
import {connect} from 'react-redux'
import Preview from './Preview'
import Score from './Score'

const defaultState = {
  textToType: '',
  words: [],
  submission: '',
  correctCount: 0,
  idx: 0,
  started: false,
  startTime: null,
  wpm: null,
  sec: 0,
  isLoading: true
}

const random = () => {
  return Math.floor(Math.random() * 10) + 1
}

class Game extends React.Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.restart = this.restart.bind(this)
    this.start = this.start.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sec !== this.state.sec) {
      if (this.state.sec > 60) {
        clearInterval(this.interval)
      }
    }
  }

  wordsPerMinute(chars, ms) {
    return Math.floor(chars / 5 / (ms / 6000))
  }

  async start() {
    const {fetchText} = this.props
    await fetchText(random())
    const {text} = this.props
    this.setState({
      textToType: text,
      started: true
    })
    this.startTimer()
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState(prevProps => {
        return {sec: prevProps.sec + 1}
      })
    }, 1000)
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

  restart() {
    this.setState(defaultState)
  }

  render() {
    const handleChange = this.handleChange
    if (!this.state.started) {
      return (
        <div className="start-view">
          <button type="button" onClick={this.start}>
            Start
          </button>
        </div>
      )
    } else {
      return (
        <div className="home-view">
          {this.state.sec >= 30 ? (
            <Score correct={this.state.correctCount} restart={this.restart} />
          ) : (
            <div className="game-view">
              <div className="timer">{this.state.sec}</div>

              <Preview
                text={this.state.textToType}
                submission={this.state.submission}
              />
              <form autoComplete="off">
                <input
                  type="text"
                  name="submission"
                  autoComplete="off"
                  value={this.state.submission}
                  onChange={handleChange}
                />
              </form>
            </div>
          )}
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    text: state.text
  }
}

const mapDispatch = dispatch => {
  return {
    fetchText: id => dispatch(getText(id))
  }
}

export default connect(mapState, mapDispatch)(Game)
