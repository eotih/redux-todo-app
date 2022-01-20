import React from 'react';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));
    }
    return (
        <div className="todoItem">
            <Checkbox
                {...label}
                checked={done}
                color="primary"
                onChange={handleCheck}
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    );
};
export default TodoItem;