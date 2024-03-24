import React, { useCallback } from "react";
import axios from "axios";
import upArrow from "../assets/up-arrow.svg";
import "./addTask.scss";

const AddTaskComponent = () => {
  const handleDeleteTask = useCallback(async () => {
    try {
      const response = await axios.delete("http://127.0.0.1:8000/");
      console.log("Task Deleted:", response.data);
    } catch (error) {
      console.error("Error Deleting Task:", error);
    }
  }, []);

  return (
    <div className="addTaskContainer">
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};

export const AddTask = React.memo(AddTaskComponent);
