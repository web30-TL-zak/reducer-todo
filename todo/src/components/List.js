import React from 'react'

const List = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <p key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.item}
        </p>
      ))}
    </div>
  )
}

export default List
