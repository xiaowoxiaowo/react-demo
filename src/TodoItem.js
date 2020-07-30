import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    /*this.content = props.content
    this.index = props.index
    this.handleItemDelete = props.handleItemDelete*/
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() {
    const { content } = this.props
    return (
      <li
        onClick={this.handleClick}
        dangerouslySetInnerHTML={{__html: content}}
      ></li>
    )
  }
  handleClick() {
    const { handleItemDelete, index } = this.props
    handleItemDelete(index)
  }
}
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  handleItemDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}
TodoItem.defaultProps = {
  test: '123'
}

export default TodoItem
