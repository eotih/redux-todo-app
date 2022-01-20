import React, { useState, useRef } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveToDo } from '../features/todoSlice';

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef();

    const addTodo = () => {
        dispatch(saveToDo({
            item: input,
            done: false,
            id: Date.now()
        }));
        setInput('');
        inputRef.current.focus();

    }

    return (
        <div className="input">
            <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>
                Send
                <i className="fas fa-paper-plane"></i>
            </button>
        </div>
    );
};
export default Input;