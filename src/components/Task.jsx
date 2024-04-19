import React from "react";
import PropTypes from "prop-types";

export default function Task({ task }) {
  return (
    <li key={task.id} className="mb-3 bg-slate-50 rounded-lg shadow-lg">
      <div className="w-72 md:w-96 p-4 flex flex-col ">
          <h3 className="font-bold mb-2 break-words">{task.title}</h3>
          <p  className="break-words">{task.description}</p>
      </div>

    </li>
  );
}

Task.propTypes = {
  task: PropTypes.object,
};
