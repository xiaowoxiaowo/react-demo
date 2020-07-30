import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store'
import { getInputChangeAction, addListAction, deleteListAction } from './store/actionCreators'

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
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div style={{padding: '10px'}}>
        <Input
          value={this.state.inputValue}
          placeholder="请输入内容"
          style={{width: '300px', marginRight: '10px'}}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleClick}>提交</Button>
        <List
          style={{marginTop: '10px', width: '400px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
        />
      </div>
    )
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
    store.dispatch(deleteListAction(index))
  }
}

export default TodoListNew
