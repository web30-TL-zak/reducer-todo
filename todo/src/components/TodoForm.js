import React from 'react'

const TodoForm = ({ handleSubmit, handleChange, value }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} />

        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
