import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/", {
        task,
      });
      console.log("Task Added:", response.data);
      if (onAddTask) {
        onAddTask(response.data);       }
      setTask("");
    } catch (error) {
      console.error("Error Adding Task:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
