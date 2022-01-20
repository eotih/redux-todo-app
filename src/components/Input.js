import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveToDo } from '../features/todoSlice';

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(saveToDo({
            item: input,
            done: false,
            id: Date.now()
        }));
        setInput('');
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>
                Add
            </button>
        </div>
    );
};
export default Input;