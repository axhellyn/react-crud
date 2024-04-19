import React, { useState } from 'react'
import Task from './Task'
import PropTypes from "prop-types";
import EditTask from './EditTask';

export default function TasksList({ tasks, onDeleteTask, onEditTask, currentId,  onSubmitUpdate }) {
    
  return (
    <ul className="mt-10">
        {tasks.map( (task) =>  
        currentId === task.id ? <EditTask task={task} onSubmitUpdate={onSubmitUpdate}/> :
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask}/>
        )}
    </ul>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(Object),
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func,
  currentId: PropTypes.number,
  onSubmitUpdate: PropTypes.func
};

