import { useState } from 'react'
import TaskInput from "./components/taskInput/taskInput"
import TaskList from "./components/taskList/taskList"
import TestRunner from "./components/testRunner/testRunner"
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    if(task.trim() === "") return;
    setTasks ([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To Do List</h1>
      <TaskInput onAddTask={addTask}/>
      <TaskList tasks={tasks} onRemoveTask={removeTask}/>
      <TestRunner />
    </div>
  )

}

export default App
