import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          <p> Todo List </p>
          {
            todoList.length > 0 ? todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                name={todo.item}
                done={todo.done}
                id={todo.id}
              />
            )) : (
              <center>
                <p>No todo's to show</p>
              </center>
            )}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
