import React from "react";
import "../style/EmployeeTasksList.css";

// employees is the prop that is passed from the AdminDashboard component.
const EmployeeTasksList = ({ employees }) => {
  return (
    <div className="employee-tasks-list w-[90%] h-[40vh] overflow-y-auto">
      <div className="em-box h-[8vh] w-[100%] text-orange-400 font-bold">
        <span className="name">Name</span>
        <span className="new">New Task</span>
        <span className="active">Active Task</span>
        <span className="completed">Completed Task</span>
        <span className="failed">Failed Task</span>
      </div>

      {/* this method is used to display how many tasks each employee have in each category with their name. */}
      {employees.map((emp, idx) => {
        return (
          <div className="em-box h-[8vh] w-[100%]" key={idx}>
            <span className="name">{emp.firstName}</span>
            <span className="new text-yellow-400">
              {emp.taskNumbers.newTask}
            </span>
            <span className="active text-blue-400">
              {emp.taskNumbers.active}
            </span>
            <span className="completed text-green-400">
              {emp.taskNumbers.completed}
            </span>
            <span className="failed text-red-400">
              {emp.taskNumbers.failed}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeTasksList;
