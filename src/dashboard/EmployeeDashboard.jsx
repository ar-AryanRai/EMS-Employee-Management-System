// import React, { useEffect } from "react";
// import Header from "../Components/Header.jsx";
// import TaskStatusList from "../Components/TaskStatusList.jsx";
// import TaskLists from "../Components/TaskLists.jsx";

// const EmployeeDashboard = ({ user }) => {
//   // useEffect(() => {
//   //   localStorage.setItem("user", JSON.stringify(user));
//   // }, [user]);

//   function acceptTask(key) {
//     user.taskNumbers.newTask -= 1;
//     console.log((user.taskNumbers.newTask -= 1));
//     user.taskNumbers.accepted += 1;
//     console.log(user.tasks[key]);
//     user.tasks[key].newTask = false;
//     user.tasks[key].active = true;
//   }

//   function rejectTask(key) {
//     user.taskNumbers.newTask -= 1;
//     user.taskNumbers.failed += 1;
//     user.tasks[key].newTask = false;
//     user.tasks[key].failed = true;
//   }

//   function failedTask(key) {
//     user.taskNumbers.active -= 1;
//     user.taskNumbers.failed += 1;
//     user.tasks[key].active = false;
//     user.tasks[key].failed = true;
//   }

//   function completedTask(key) {
//     user.taskNumbers.active -= 1;
//     user.taskNumbers.completed += 1;
//     user.tasks[key].active = false;
//     user.tasks[key].completed = true;
//   }

//   return (
//     <div className="h-[100vh] w-[100%] bg-[#1c1c1c]">
//       <Header name={user.firstName} />
//       <TaskStatusList userData={user} />
//       <TaskLists
//         userData={user}
//         completedTask={completedTask}
//         failedTask={failedTask}
//         rejectTask={rejectTask}
//         acceptTask={acceptTask}
//       />
//     </div>
//   );
// };

// export default EmployeeDashboard;

import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import TaskStatusList from "../Components/TaskStatusList.jsx";
import TaskLists from "../Components/TaskLists.jsx";
import { AuthContext } from "../context/AuthProvider.jsx";

const EmployeeDashboard = ({ user }) => {
  const [userData, setUserData] = useState(user);

  const authData = useContext(AuthContext);
  const { employees, admin } = authData || { employees: [], admin: null };

  useEffect(() => {
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
    const updatedEmployees = employees.map((emp) =>
      emp.id === userData.id ? { ...emp, ...userData } : emp
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }, [userData]);

  function acceptTask(key) {
    const updatedUser = { ...userData };
    updatedUser.taskNumbers.newTask -= 1;
    updatedUser.taskNumbers.active += 1;
    updatedUser.tasks[key].newTask = false;
    updatedUser.tasks[key].active = true;
    setUserData(updatedUser);
  }

  function rejectTask(key) {
    const updatedUser = { ...userData };
    updatedUser.taskNumbers.newTask -= 1;
    updatedUser.taskNumbers.failed += 1;
    updatedUser.tasks[key].newTask = false;
    updatedUser.tasks[key].failed = true;
    setUserData(updatedUser);
  }

  function failedTask(key) {
    const updatedUser = { ...userData };
    updatedUser.taskNumbers.active -= 1;
    updatedUser.taskNumbers.failed += 1;
    updatedUser.tasks[key].active = false;
    updatedUser.tasks[key].failed = true;
    setUserData(updatedUser);
  }

  function completedTask(key) {
    const updatedUser = { ...userData };
    updatedUser.taskNumbers.active -= 1;
    updatedUser.taskNumbers.completed += 1;
    updatedUser.tasks[key].active = false;
    updatedUser.tasks[key].completed = true;
    setUserData(updatedUser);
  }

  return (
    <div className="h-[100vh] w-[100%] bg-[#1c1c1c]">
      <Header name={userData.firstName} />
      <TaskStatusList userData={userData} />
      <TaskLists
        userData={userData}
        completedTask={completedTask}
        failedTask={failedTask}
        rejectTask={rejectTask}
        acceptTask={acceptTask}
      />
    </div>
  );
};

export default EmployeeDashboard;
