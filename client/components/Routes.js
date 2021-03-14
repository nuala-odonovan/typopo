import React from 'react'
import Game from './Game'

import {Route, Switch} from 'react-router-dom'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Game} />
        {/* <Route exact path="/chat" component={Chat} /> */}
      </Switch>
    )
  }
}

export default Routes
