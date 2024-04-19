import React from "react";
import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";

export default function Task({ task, onDeleteTask }) {
  return (
    <li key={task.id} className="mb-3 bg-slate-50 rounded-lg shadow-lg flex">
      <div className="w-72 md:w-96 p-4 flex flex-col ">
          <h3 className="font-bold mb-2 break-words">{task.title}</h3>
          <p  className="break-words">{task.description}</p>
      </div>
      <TiDeleteOutline className="text-xl hover:cursor-pointer m-3" onClick={() => onDeleteTask(task.id)}/>
    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object,
  onDeleteTask: PropTypes.func
};
