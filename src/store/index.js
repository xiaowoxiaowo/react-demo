import { createStore, applyMiddleware, compose } from 'redux'
//import thunk from 'redux-thunk'
import reducer from './reducer'
import createSgaeMiddleware from 'redux-saga'
import todoSagas from './sagas'

const sageMiddleware = createSgaeMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ ?
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_({}) : compose
const enhancer = composeEnhancers(
  applyMiddleware(sageMiddleware)
)

const store = createStore(
  reducer,
  enhancer
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
sageMiddleware.run(todoSagas)

export default store