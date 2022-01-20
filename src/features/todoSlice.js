/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

const saveTodoList = (state) => {
    localStorage.setItem('todoList', JSON.stringify(state));
}
const initialState = {
    todoList: localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [],
};
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveToDo: (state, action) => {
            state.todoList.push(action.payload);
            saveTodoList(state.todoList);;
        },
        setCheck: (state, action) => {
            state.todoList.map((item) => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false;
                        saveTodoList(state.todoList);
                    } else {
                        item.done = true;
                        saveTodoList(state.todoList);

                    }
                }
            })
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload);
            saveTodoList(state.todoList);
        },
        editTodo: (state, action) => {
            // edit To do list
            state.todoList = state.todoList.map((item) => item.id === action.payload.id ? {
                ...item,
                item: action.payload.name,
                done: action.payload.done
            } : item);
            saveTodoList(state.todoList);
        }
    },
});

export const { saveToDo, setCheck, removeTodo, editTodo } = todoSlice.actions;

export const listTodo = state => state.todos.todoList;


export default todoSlice.reducer;
