import React, { useState, useEffect } from 'react';
import useLocalStorage from './utils/useLocalStorage.js';

import Search from './components/Search.js';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';

export default function App() {
  const todos = [
    { title: 'hi', done: false },
    { title: 'yo', done: true },
  ];

  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useLocalStorage(
    'todos',
    []
  );
  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

  

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    setFilteredTodoList(todoList);
  }, [todoList]);

  const updateTodo = (id, updatedTodo) => {
    const todoID = id;
    let copiedTodoList = [...todoList];
    copiedTodoList[todoID] = updatedTodo;
    setTodoList(copiedTodoList);
  };

  const deleteTodo = (id) => {
    const todoID = id;
    let copiedTodoList = [...todoList];
    copiedTodoList.splice(todoID, 1);
    setTodoList(copiedTodoList);
  };

  return (
    <div className="pt-4">
      <h1 className="text-2xl text-center">Todo List</h1>
      <Search todos={todoList} setFilteredTodoList={setFilteredTodoList} />
      <Todos
        todos={filteredTodoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <AddTodo todos={todoList} setTodos={setTodoList} />
    </div>
  );
}
