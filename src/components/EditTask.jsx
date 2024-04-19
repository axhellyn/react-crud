import React, { useState } from 'react'
import PropTypes from "prop-types";

export default function EditTask({ task, onSubmitUpdate}) {
  const [titleUpdate, setTitleUpdate] = useState(task.title);
  const [descriptionUpdate, setDescriptionUpdate] = useState(task.description);

  function handleTitleUpdate(e){
      setTitleUpdate(e.target.value);
  }

  function handleDescriptionUpdate(e){
    setDescriptionUpdate(e.target.value);
  }

  return (
    <li key={task.id} className="mb-3 bg-slate-50 rounded-lg shadow-lg flex  items-center">
      <div className="w-72 md:w-96 p-4 flex flex-col ">
          <input type="text" name="title" className='p-2 border-2 border-purple-400 rounded-md focus:outline-none mb-2 h-7' value={titleUpdate} onChange={handleTitleUpdate}/>
          <input type="text" name="description" className='p-2 border-2 border-purple-400  rounded-md focus:outline-none h-7' value={descriptionUpdate} onChange={handleDescriptionUpdate}/>
      </div>
      <button  className="py-1 px-3 my-5 mr-2 rounded-lg bg-purple-400 text-white shadow-md hover:bg-purple-100 hover:text-purple-500 ease-in-out duration-500" onClick={() => onSubmitUpdate(task.id, titleUpdate, descriptionUpdate)}> Edit </button>
    </li>
  )
}

EditTask.propTypes = {
    task: PropTypes.object,
    onSubmitUpdate: PropTypes.func
  };