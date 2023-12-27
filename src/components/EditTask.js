import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store'; // Import the action

const EditTaskForm = ({ taskId, existingText, onEditDone }) => {
    const [newText, setNewText] = useState(existingText);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newText.trim()) return;
        dispatch(editTask({ id: taskId, newText }));
        setNewText('');
        onEditDone(); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
            <button class="change-button" type="submit">Change</button>
        </form>
    );
};

export default EditTaskForm;