import React, { useCallback, useState } from "react";
import upArrow from "../assets/up-arrow.svg";
import "./addTask.scss";

const AddTaskComponent = ({ onAddTaskClick }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const handOntaskDesChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleOnAddTaskClick = useCallback(() => {
    if (taskDescription.length > 0) {
      onAddTaskClick({
        description: taskDescription,
        isCompleted: false,
      });
      setTaskDescription('');
    }
  }, [onAddTaskClick, taskDescription]);

  return (
    <div className="addTaskContainer">
      <input
        type="text"
        onChange={handOntaskDesChange}
        placeholder="Enter new task here..."
        required={taskDescription.length <= 0}
        value={taskDescription}
      />
      <button onClick={handleOnAddTaskClick}>
        <img alt="back-button" src={upArrow} height={28} width={28} />
      </button>
    </div>
  );
};

export const AddTask = React.memo(AddTaskComponent);
