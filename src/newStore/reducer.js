const defaultState = {
  inputValue: '333',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === 'change_input_value') {
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'add_list') {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    console.log(newState)
    return newState
  }
  if (action.type === 'delete_list') {
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}
