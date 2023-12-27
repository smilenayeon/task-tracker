import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../store';
import EditTaskForm from "./EditTask";

const TaskList = () => {
    const [editingId, setEditingId] = useState(null);
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteTask(id));

    };

    const handleEdit = (id)=>{
        setEditingId(id);
    }
    const handleEditDone = () => {
        setEditingId(null);
    };

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {editingId === task.id 
                        ? <EditTaskForm taskId={task.id} existingText={task.text} onEditDone={handleEditDone} />
                        : task.text
                    }
                    {/* Render Edit and Delete buttons only if not editing this task */}
                    {editingId !== task.id && (
                        <div class="buttons">
                            <button class="edit-button" onClick={() => handleEdit(task.id)}>Edit</button>
                            <button class ="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

