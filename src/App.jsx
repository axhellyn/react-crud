import Form from "./components/Form"
import TasksList from "./components/TasksList"
import { useState } from "react";
import { initialTask } from './utils/Tasks';
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState(initialTask);
  const [updateTask, setUpdateTask] = useState(-7);

  function handleAddTask(task){
    setTasks([...tasks, task])
  }

  function handleDeleteTask(id){
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleEditTask(id){
    setUpdateTask(id);
  }

  function handleSubmitUpdate(id, title, description){
    if(!title || !description) return alert("isi yang lengkap bg");
    setTasks((e) => e.map(task => (task.id === id ? {...task, title: title, description:description } : task)))
    setUpdateTask(-1);
}

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-slate-50 dark:bg-purple-950">
      <Header />
      <Form onAddTask={handleAddTask}/>
      <TasksList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} currentId={updateTask} onSubmitUpdate={handleSubmitUpdate}/>
    </div>
  )
}

export default App
