import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';


const AddTask = ()=>{
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!task)return;
        dispatch(addTask({ id: Date.now(), text: task }));
        setTask('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button class="add-button" type="submit">Add Task</button>

        </form>

    );

};

export default AddTask;