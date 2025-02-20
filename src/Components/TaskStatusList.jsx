import React from "react";
import "../style/TaskStatusList.css";

const TaskStatusList = ({ userData }) => {
  return (
    <>
      <div className="container h-[24%] w-[96%] flex justify-between items-center flex-nowrap">
        {/* box that display the number of new tasks for the employee */}
        <div className="bg-yellow-400 h-[90%] w-[24%] flex flex-col items-center justify-center gap-[20px] rounded-xl">
          <h1 className="text-2xl font-semibold">New Tasks</h1>
          <h1 className="text-6xl font-semibold">
            {userData.taskNumbers.newTask}
          </h1>
        </div>

        {/* box that display the number of active tasks for the employee */}
        <div className="bg-blue-400 h-[90%] w-[24%] flex flex-col items-center justify-center gap-[20px] rounded-xl">
          <h1 className="text-2xl font-semibold">Accepted Tasks</h1>
          <h1 className="text-6xl font-semibold">
            {userData.taskNumbers.active}
          </h1>
        </div>

        {/* box that display the number of completed tasks for the employee */}
        <div className="bg-green-400 h-[90%] w-[24%] flex flex-col items-center justify-center gap-[20px] rounded-xl">
          <h1 className="text-2xl font-semibold">Completed Tasks</h1>
          <h1 className="text-6xl font-semibold">
            {userData.taskNumbers.completed}
          </h1>
        </div>

        {/* box that display the number of failed tasks for the employee */}
        <div className="bg-red-400 h-[90%] w-[24%] flex flex-col items-center justify-center gap-[20px] rounded-xl">
          <h1 className="text-2xl font-semibold">Failed Tasks</h1>
          <h1 className="text-6xl font-semibold">
            {userData.taskNumbers.failed}
          </h1>
        </div>
      </div>
      ;
    </>
  );
};

export default TaskStatusList;
