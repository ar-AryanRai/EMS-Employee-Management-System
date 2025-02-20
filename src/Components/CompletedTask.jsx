import React from "react";
import "../style/TaskLists.css";

const CompletedTask = ({job}) => {
  return (
    <div className="task-box bg-green-400 h-[96%] min-w-[400px]">
      <div className="task-tittle">
        <h1 className="text-2xl font-bold">{job.title}</h1>
      </div>

      <div className="line2 flex justify-between">
        <div className="task-deadline bg-purple-600">{job.category}</div>

        <div className="task-deadline bg-purple-600">{job.date}</div>
      </div>

      <div className="task-details">
        {job.description}
      </div>
      <div className="options">
        <button className="completed  bg-green-700">Completed</button>
      </div>
    </div>
  );
};

export default CompletedTask;
