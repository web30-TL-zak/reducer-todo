import React from 'react'

const List = ({ todos, toggleTodo, clearCompleted }) => {
  return (
    <div>
      {todos.map(todo => (
        <p key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.item}
        </p>
      ))}

      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default List
