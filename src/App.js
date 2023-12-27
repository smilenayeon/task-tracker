import './App.css';
import AddTask from './components/AddTasks';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <AddTask /> 
      <TaskList />
    </div>
  );
}

export default App;
