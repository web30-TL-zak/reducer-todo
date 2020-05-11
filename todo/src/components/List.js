import React from 'react';

const List = ({ todos }) => {
    return (
        <div>
            {
                todos.map(todo => <p key={todo.id}>{todo.item}</p>)
            }
        </div>
    );
};

export default List;