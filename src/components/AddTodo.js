import React, { useState } from 'react';

export default function AddTodo(props) {
  const { todos, setTodos } = props;

  const [text, setText] = useState('');
  const addNewTodo = (value) => {
    if (value.trim().length === 0) return;
    const newTodo = {
      title: value,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleClick = () => {
    addNewTodo(text);
    setText('');
  };
  return (
    <div className="fixed bottom-0 w-full border flex">
      <input
      className="flex-1 p-4"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo..."
      />
      <button className="p-4" onClick={handleClick}>Send</button>
    </div>
  );
}
