import React, { useState } from 'react';

export default function Todo(props) {
  const { id, title, done, updateTodo, deleteTodo } = props;
  const [checked, setChecked] = useState(done);
  const handleCheck = () => {
    setChecked(!checked);
    updateTodo(id, {
      title: title + '1',
      done: !checked,
    });
  };
  return (
    <div className="flex items-center justify-between p-4 border">
      <input type="checkbox" checked={checked} onChange={handleCheck} />

      <p>{title}</p>
      <p>{`${done}`}</p>

      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
