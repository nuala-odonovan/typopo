import React from 'react'
import {connect} from 'react-redux'
import Welcome from './Welcome'
import Home from './Home'

class Main extends React.Component {
  render() {
    const user = this.props.user
    return <div>{user.username ? <Home user={user} /> : <Welcome />}</div>
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(Main)
