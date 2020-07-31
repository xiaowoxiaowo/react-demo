import React, { Component } from 'react'
import { connect } from 'react-redux'


const TodoList = (props) => {
  const { inputValue, list, handleInputChange, handleAddList, deleteItem } = props
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleAddList}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={() => {deleteItem(index)}}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleAddList() {
      const action = {
        type: 'add_list'
      }
      dispatch(action)
    },
    deleteItem(index) {
      const action = {
        type: 'delete_list',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)