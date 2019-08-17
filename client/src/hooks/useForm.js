import React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.key]: action.value
      }
    case 'SET_VALUES':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

function useForm(initialValues = {}) {
  const [state, dispatch] = React.useReducer(reducer, initialValues)
  const setValue = React.useCallback((key, value) => dispatch({type: 'SET_VALUE', key, value}))
  const setValues = React.useCallback(payload => dispatch({type: 'SET_VALUES', payload}))
  return {
    values: state,
    setValue,
    setValues
  }
}

export default useForm
