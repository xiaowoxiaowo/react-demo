import { CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_LIST_VALUE, INIT_LIST, GET_INIT_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const addListAction = (value) => ({
  type: ADD_LIST_VALUE,
  value: value
})

export const deleteListAction = (index) => ({
  type: DELETE_LIST_VALUE,
  index
})

export const initListAction = (list) => ({
  type: INIT_LIST,
  list
})

export const getInitList = () => ({
  type: GET_INIT_LIST
})
