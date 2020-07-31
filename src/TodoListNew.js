import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store'
import TodoListNewUI from './TodoListNewUI'
import { getInputChangeAction, addListAction, deleteListAction, getInitList } from './store/actionCreators'
import axios from 'axios'

class TodoListNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...store.getState(),
      text: '123'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListNewUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  componentDidMount() {
    store.dispatch(getInitList())
    /*axios.post('/mock').then(res => {
      console.log(res.data.data)
      store.dispatch(initListAction(res.data.data))
    })*/
  }
  handleInputChange(e) {
    store.dispatch(getInputChangeAction(e.target.value))
  }
  handleStoreChange() {
    this.setState((prevState) => ({
      ...store.getState()
    }))
  }
  handleClick() {
    store.dispatch(addListAction())
  }
  handleItemDelete(index) {
    console.log('list', index)
    store.dispatch(deleteListAction(index))
  }
}

export default TodoListNew
