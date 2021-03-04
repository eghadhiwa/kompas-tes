import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import fetch from './reducers/fetch'

const rootReducer = combineReducers({
  fetch
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store