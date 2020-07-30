import { CHANGE_INPUT_VALUE, ADD_LIST_VALUE, DELETE_LIST_VALUE } from './actionTypes'

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