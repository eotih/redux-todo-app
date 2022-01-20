import { useState } from 'react';
import './TodoItem.css';
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { setCheck, removeTodo, editTodo } from '../features/todoSlice';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TodoItem = ({ name, done, id }) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleOpenEdit = () => {
        setOpen(true);
        setInput(name);
    }
    const handleCloseEdit = () => setOpen(false);
    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    const removeToDo = (id) => {
        dispatch(removeTodo(id));
    }
    const editToDo = (id) => {
        dispatch(editTodo({
            name: input,
            done: false,
            id
        }));
        setOpen(false);
    }
    return (
        <div className="container">
            <div className="todoItem">
                <Checkbox
                    {...label}
                    checked={done}
                    color="primary"
                    onClick={handleCheck}
                />
                {open ? (
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                ) : (
                    <p className={done ? 'todoItem--done': null}>{name}</p>
                )}
            </div>
            <div className="todoActions">
                {open ? (
                    <>
                        <i onClick={() => editToDo(id)} className="fas fa-check"></i>
                        <i onClick={() => handleCloseEdit()} className="fas fa-times"></i>
                    </>
                ) : (
                    <>
                        <i onClick={() => handleOpenEdit()} className="fas fa-edit"></i>
                        <i onClick={() => removeToDo(id)} className="fas fa-trash-alt"></i>
                    </>
                )}
            </div>
        </div>
    );
};
export default TodoItem;