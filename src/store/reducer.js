import { CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_LIST_VALUE, INIT_LIST } from './actionTypes'
const defaultState = {
  inputValue: '333',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_LIST_VALUE) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_LIST_VALUE) {
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === INIT_LIST) {
    newState.list = action.list
    return newState
  }
  return state
}
