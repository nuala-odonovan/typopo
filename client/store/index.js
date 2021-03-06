import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import scores from './scores'
import messages from './messages'
import online from './online'
import text from './text'

const reducer = combineReducers({user, scores, messages, online, text})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './scores'
export * from './messages'
export * from './online'
export * from './text'
