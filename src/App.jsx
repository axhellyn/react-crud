import Form from "./components/Form"
import TasksList from "./components/TasksList"
import { useState } from "react";
import { initialTask } from './utils/Tasks';

function App() {
  const [tasks, setTasks] = useState(initialTask);

  function handleAddTask(task){
    setTasks([...tasks, task])
  }

  function handleDeleteTask(id){
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-slate-50">
      <Form onAddTask={handleAddTask}/>
      <TasksList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default App
