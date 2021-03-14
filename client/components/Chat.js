import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../store'

class Chat extends React.Component {
  constructor() {
    super()
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const content = e.target.value
    const name = this.props.name
    const send = this.props.send
    if (e.key === 'Enter') {
      const message = {name, content}
      send(message)
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
        <input onKeyDown={this.submit} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    name: state.user.username,
    messages: state.messages
  }
}

const mapDispatch = dispatch => {
  return {
    send: message => dispatch(addMessage(message))
  }
}
//message: {name: , content: }

export default connect(mapState, mapDispatch)(Chat)
