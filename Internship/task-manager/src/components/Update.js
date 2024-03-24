import React, { useCallback } from "react";
import axios from "axios";
import upArrow from "../assets/up-arrow.svg";
import "./addTask.scss";

const AddTaskComponent = () => {
  const handleUpdateTask = useCallback(async () => {
    try {
      const response = await axios.put("http://127.0.0.1:8000/", {
        taskData: { description: "Updated Task Description", isCompleted: true },
      });
      console.log("Task Updated:", response.data);
    } catch (error) {
      console.error("Error Updating Task:", error);
    }
  }, []);

  return (
    <div className="addTaskContainer">
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export const AddTask = React.memo(AddTaskComponent);
