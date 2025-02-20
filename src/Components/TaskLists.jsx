import React from "react";
import "../style/TaskLists.css";
import NewTask from "./NewTask";
import AcceptedTask from "./AcceptedTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";


// completedTask, failedTask, rejectTask, acceptTask are the functions that passed from the EmployeeDashboard component.
const TaskLists = ({
  userData,
  completedTask,
  failedTask,
  rejectTask,
  acceptTask,
}) => {
  return (
    <div className="task-container h-[47%] w-[96vw] bg-[#F5F5DC] flex gap-[40px] justify-between flex-nowrap items-center overflow-x-auto">

      {/* function that displays all the jobs based on its type whether it is new tasks, accepted tasks, completed tasks and failed tasks */}
      {userData.tasks.map((task, idx) => {
        if (task.active) {
          return (
            <AcceptedTask
              job={task}
              key={idx}
              id={idx}
              completedTask={completedTask}
              failedTask={failedTask}
            />
          );
        } else if (task.newTask) {
          return (
            <NewTask
              job={task}
              key={idx}
              id={idx}
              acceptTask={acceptTask}
              rejectTask={rejectTask}
            />
          );
        } else if (task.completed) {
          return <CompletedTask job={task} key={idx} id={idx} />;
        } else if (task.failed) {
          return <FailedTask job={task} key={idx} id={idx} />;
        }
      })}
    </div>
  );
};

export default TaskLists;
