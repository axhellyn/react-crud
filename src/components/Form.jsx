import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types' 

export default function Form({onAddTask}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    if(!title || !description) return alert("isi yang lengkap bg");

    const newTask = {
      id: Date.now(),
      title,
      description,
    }
    onAddTask(newTask);
    
    setTitle("");
    setDescription("");
  }

  function handleTitleChange(e){
    setTitle(e.target.value);
  }

  function handleDescChange(e){
    setDescription(e.target.value);
  }

  return (
    <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <input className="w-72 md:w-96 h-12 py-1 px-3 my-5 bg-gray-50 shadow-md rounded-md focus:outline-none" type="text" placeholder="Title" onChange={handleTitleChange} value={title}/>
        <textarea className="w-72 md:w-96 py-1 px-3 bg-gray-50 shadow-md rounded-md focus:outline-none"  type="text" placeholder="Description" onChange={handleDescChange} value={description}/>
        <button className="py-1 px-3 my-5 rounded-lg bg-purple-400 text-white shadow-md hover:bg-purple-100 hover:text-purple-500 ease-in-out duration-500" type='submit'>Add Task</button>
    </form>
  )
}

Form.propTypes = {
  onAddTask: PropTypes.func
}
