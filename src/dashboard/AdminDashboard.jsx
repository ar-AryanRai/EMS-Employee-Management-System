import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import CreateTask from "../Components/CreateTask";
import EmployeeTasksList from "../Components/EmployeeTasksList";
import "../style/AdminDashboard.css";

const AdminDashboard = () => {

  //  to store the value of the employees from the local storage.
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));

    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  // it is a function that is used to submit the task and assign it to the employee and update the local storage.
  function onSubmitTask(task, assignedTo) {

    //  map method updates the employees array and adds the task to the employee and updates the task number and store it in updatedEmployees variable.
    const updatedEmployees = employees.map((ele) => {
      if (assignedTo === ele.firstName) {
        ele.tasks.push(task);
        ele.taskNumbers.newTask += 1;
      }
      return ele;
    });

    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }

  return (
    <div className="admin-box min-h-[100vh] w-[100%] bg-[#1c1c1c] scrollbar-none">
      <Header name="Admin" />
      <CreateTask onSubmitTask={onSubmitTask} />
      <EmployeeTasksList employees={employees} />
    </div>
  );
};

export default AdminDashboard;
