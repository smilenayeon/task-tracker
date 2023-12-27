import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for tasks
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        editTask: (state,action)=>{
            const {id, newText} =action.payload;
            const taskToEdit =state.find(task => task.id === id);
            if(taskToEdit) {
                taskToEdit.text = newText;
            }
        },
    },
});
// Export the actions
export const { addTask, deleteTask, editTask } = tasksSlice.actions;

// Create store
const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
});

export default store;