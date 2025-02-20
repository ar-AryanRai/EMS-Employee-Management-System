import React from "react";
import "../style/TaskLists.css";

const NewTask = ({ job, key, id, acceptTask, rejectTask }) => {
  return (
    <div className="task-box bg-yellow-400 h-[96%] min-w-[400px]">
      <div className="task-tittle">
        <h1 className="text-2xl font-bold">{job.title}</h1>
      </div>

      <div className="line2 flex justify-between">
        <div className="task-deadline bg-purple-600">{job.category}</div>

        <div className="task-deadline bg-purple-600">{job.date}</div>
      </div>

      <div className="task-details">{job.description}</div>
      <div className="options">
        <button
          className="bg-green-600"
          onClick={() => {
            acceptTask(id);
          }}
        >
          Accept
        </button>
        <button
          className="bg-red-600"
          onClick={() => {
            rejectTask(id);
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default NewTask;
