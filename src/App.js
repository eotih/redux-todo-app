import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { listTodo } from './features/todoSlice';

function App() {
  const [filter, setFilter] = React.useState('');
  const todoList = useSelector(listTodo);

  return (
    <div className="app">
      <div className="app__container">
        <p> Todo List </p>
        <div className="app__checkAll">
          <input placeholder="Tìm kiếm..." onChange={(e) => setFilter(e.target.value)} />
        </div>
        <div className="app__listTodo">
          {
            todoList.length > 0 ? todoList
              .filter((item) => item.item.toLowerCase().includes(filter.toLowerCase()))
              .map((todo) => (
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
