import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './new/TodoList'
import { Provider } from 'react-redux'
import store from './newStore'
import './mock.js'

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

//import App from './App'
ReactDOM.render(
  App,
  document.getElementById('root')
)
/*
<React.StrictMode>
<App />
</React.StrictMode>,*/
