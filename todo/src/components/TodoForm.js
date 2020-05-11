import React from 'react'

const TodoForm = ({ handleSubmit, handleChange, value }) => {
  return (
    <div style={{ marginTop: '5vh' }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='add'
          placeholder='Take out garbage'
          value={value}
          onChange={handleChange}
        />

        <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm
