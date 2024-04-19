import React from 'react'
import Task from './Task'
import PropTypes from "prop-types";

export default function TasksList({ tasks }) {
    
  return (
    <ul className="mt-10">
        {tasks.map( (task) =>  
        <Task key={task.id} task={task}/>
        )}
    </ul>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(Object),
};

