import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListNewUI = (props) => {
  return (
    <div style={{padding: '10px'}}>
      <Input
        value={props.inputValue}
        placeholder="请输入内容"
        style={{width: '300px', marginRight: '10px'}}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleClick}>提交</Button>
      <List
        style={{marginTop: '10px', width: '400px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListNewUI