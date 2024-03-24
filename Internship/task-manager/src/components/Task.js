import React from "react";
import checkMark from "../assets/checkmark.svg";
import deleteIcon from "../assets/delete.svg";
import "./task.scss";

const TaskComponent = ({
  taskDetails,
  handleDeleteClick,
  handleCompleteClick,
  key,
  index,
}) => {
  return (
    <div className="taskDetails" key={key}>
      <div className="titleAndDescription">
        <span className="taskId">{`task ${index + 1}: `}</span>
        <span>{taskDetails.description}</span>
      </div>
      <button
        onClick={() => handleCompleteClick(taskDetails.id)}
        className={`completeTaskButton ${
          taskDetails.isCompleted ? "completed" : ""
        }`}
      >
        <img alt="back-button" src={checkMark} height={32} width={48} />
      </button>
      <button onClick={() => handleDeleteClick(taskDetails.id)}>
        <img alt="back-button" src={deleteIcon} height={28} width={48} />
      </button>
    </div>
  );
};

export const Task = React.memo(TaskComponent);
