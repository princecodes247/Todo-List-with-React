import React, { useState } from 'react';

import Todo from './Todo.js';

export default function Todos(props) {
  return (
    <div className="p-4">
      {props.todos && props.todos.length !== 0 ? (
        props.todos.map((todo, id) => (
          <Todo
            key={id}
            id={id}
            title={todo.title}
            done={todo.done}
            updateTodo={props.updateTodo}
            deleteTodo={props.deleteTodo}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 text-italic">Nothing to show</p>
      )}
    </div>
  );
}
