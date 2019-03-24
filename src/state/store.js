import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'

export default createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(thunkMiddleware),
)
