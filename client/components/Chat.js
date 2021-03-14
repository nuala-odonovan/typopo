import React from 'react'
import {connect} from 'react-redux'
import {addMessage, addUserOnline} from '../store'

class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const input = e.target.value
    this.setState({input})
  }
  submit(e) {
    const content = e.target.value
    const name = this.props.name
    const send = this.props.send
    if (e.key === 'Enter') {
      const message = {name, content}
      send(message)
      this.setState({input: ''})
    }
  }

  render() {
    const messages = this.props.messages
    return (
      <div className="chat-view">
        <div className="messages">
          {messages.map((message, idx) => (
            <div key={idx}>
              <p>{message.name}</p>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          onKeyDown={this.submit}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    name: state.user.username,
    messages: state.messages
  }
}

const mapDispatch = dispatch => {
  return {
    send: message => dispatch(addMessage(message)),
    addUser: user => dispatch(addUserOnline(user))
  }
}
//message: {name: , content: }

export default connect(mapState, mapDispatch)(Chat)
