import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './TodoItem'
import axios from 'axios'
/*function TodoList() {
  return (
    <Fragment>
      <input type="text"></input>
      <button>提交</button>
      <ul>
        <li>学英语</li>
        <li>Learning React</li>
      </ul>
    </Fragment>
  )
}*/
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete =this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        {/*这是一段注释*/}
        <label htmlFor='insertArea'>输入内容</label>
        <input id='insertArea'
               type='text'
               className='input'
               value={this.state.inputValue}
               onChange={this.handleInputChange}
               ref={(input) => {this.input = input}}
        ></input>
        <button onClick={this.handleBtnClick}>提交</button>
        {this.state.inputValue}
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  componentDidMount() {
    axios.post('/mock').then(res => {
      console.log(res.data)
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem content={item}
                       index={index}
                       key={index}
                       handleItemDelete={this.handleItemDelete}
      ></TodoItem>
    })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }
  handleBtnClick() {
    /*this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })*/
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }))
  }
  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {list}
    })
  }
}
export default TodoList
