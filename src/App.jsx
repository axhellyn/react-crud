import Form from "./components/Form"
import TasksList from "./components/TasksList"
import { useState } from "react";
import { initialTask } from './utils/Tasks';

function App() {
  const [tasks, setTasks] = useState(initialTask);

  function onAddTask(task){
    setTasks([...tasks, task])
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-slate-50">
      <Form onAddTask={onAddTask}/>
      <TasksList tasks={tasks}/>
    </div>
  )
}

export default App
