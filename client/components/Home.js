import React from 'react'
import {connect} from 'react-redux'
import Game from './Game'
import Welcome from './Welcome'

class Home extends React.Component {
  render() {
    const user = this.props.user
    return <div>{user.username ? <Game user={user} /> : <Welcome />}</div>
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Home)
