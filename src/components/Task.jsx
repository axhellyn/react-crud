import React from "react";
import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

export default function Task({ task, onDeleteTask, onEditTask }) {
  return (
    <li key={task.id} className="mb-3 bg-slate-50 dark:bg-purpleMdDark rounded-lg shadow-lg flex">
      <div className="w-72 md:w-96 p-4 flex flex-col ">
          <h3 className="text-purpleMdDark dark:text-purple-100 font-bold mb-2 break-words">{task.title}</h3>
          <p  className="text-purpleMdDark dark:text-purple-100 break-words">{task.description}</p>
      </div>
      <div className="flex flex-col justify-between">
        <TiDeleteOutline className="text-purpleMdDark dark:text-purple-100 text-xl hover:cursor-pointer m-3" onClick={() => onDeleteTask(task.id)}/>
        <FaEdit className="text-purpleMdDark dark:text-purple-100 m-3 hover:cursor-pointer" onClick={() => onEditTask(task.id)}/>
      </div>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  onDeleteTask: PropTypes.func,
  onEditTask: PropTypes.func
};
