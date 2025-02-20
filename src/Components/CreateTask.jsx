import React, { useEffect, useState } from "react";
import "../style/CreateTask.css";

// onSubmitTask function is passed down as a prop from AdminDashboard to CreateTask component.
const CreateTask = ({ onSubmitTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    //  this method is used to prevent refreshing of the page on submit.
    e.preventDefault();

    // create task object
    const task = {
      title: title,
      description: description,
      date: deadline,
      category: category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    onSubmitTask(task, assignedTo);

    // clear the form fields
    setTitle("");
    setDeadline("");
    setAssignedTo("");
    setCategory("");
    setDescription("");
  }

  return (
    <form className="task-box-container h-[49vh] w-[90%] flex">
      <div className="left-side w-[50%] h-[100%]">
        {/*  task title label */}
        <div>
          <label htmlFor="task-title">Task Title:</label>
          <input
            type="text"
            name="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="task-title"
            placeholder="Enter the title for the task"
          />
        </div>

        {/* End date label */}
        <div>
          <label htmlFor="task-deadline">Task Deadline:</label>
          <input
            type="date"
            name="task-deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            id="task-deadline"
            placeholder="Last date for the task"
          />
        </div>

        {/* Task Assigned to */}
        <div>
          <label htmlFor="task-assignedTo">Task Assigned To:</label>
          <input
            type="text"
            name="task-assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            id="task-assignedTo"
            placeholder="Enter the Employee name"
          />
        </div>

        {/* Type of Task */}
        <div>
          <label htmlFor="task-type">Type of Task:</label>
          <input
            type="text"
            name="task-type"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="task-type"
            placeholder="Enter type of the task"
          />
        </div>
      </div>

      <div className="right-side w-[50%] h-[100%] flex flex-col gap-10">
        {/* Task Description */}
        <div className="flex gap-8">
          <label htmlFor="task-description">Task Description:</label>
          <textarea
            name="task-description"
            id="task-description"
            cols="50"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the task description"
          ></textarea>
        </div>

        {/* div for add task button */}
        <div className="flex justify-center">
          <button
            className="add-btn bg-orange-400 rounded-lg text-black font-semibold active:scale-90 cursor-pointer"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTask;
