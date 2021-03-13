import React from 'react'
import {connect} from 'react-redux'
import {getUser, getScores} from '../store'

class Welcome extends React.Component {
  constructor(props) {
    super()
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleEnter(e) {
    const {setUser, getTopScores} = this.props
    if (e.keyCode === 13) {
      console.log('yep')
      console.log(e.target.value)
      setUser(e.target.value)
      getTopScores()
    }
  }
  render() {
    return (
      <div className="welcome-view">
        <h2>Please enter your name:</h2>
        <input type="text" onKeyDown={this.handleEnter} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapdispatch = dispatch => {
  return {
    setUser: username => dispatch(getUser(username)),
    getTopScores: () => dispatch(getScores())
  }
}

export default connect(null, mapdispatch)(Welcome)
