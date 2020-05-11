import React from 'react'

const List = ({ todos, toggleTodo, clearCompleted }) => {
  return (
    <div>
      {todos.map(todo => (
        <p
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.item}
        </p>
      ))}

      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}

export default List
