import React, { useState } from 'react';

export default function Search(props) {
  const handleSearch = (e) => {
    let newArr = props.todos.filter((todo) =>
      todo.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    props.setFilteredTodoList(newArr);
  };

  return (
    <div className="p-4">
      <div className="flex focus:border-color-red items-center border-b">
        <input
          className="flex-1 p-4 outline-none"
          type="text"
          onChange={handleSearch}
          placeholder="Search here..."
        />
        <button className="p-4">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
