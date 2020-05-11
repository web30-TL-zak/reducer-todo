import React, { useReducer, useState, useEffect } from 'react'
import { reducer, initialState } from './reducers/reducer'

import './App.css'
import TodoForm from './components/TodoForm'
import List from './components/List'

function App () {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className='App'>
      <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} value={value}/>

      <List todos={state} />
    </div>
  )

  /////FUNCTIONS/////
  function handleChange (e) {
    setValue(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    dispatch({
      type: 'ADD_TODO',
      payload: {
        item: value
      }
    })
  }
}

export default App
