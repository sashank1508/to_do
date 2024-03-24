import React from "react";
import { Task } from "./Task";
import { AddTask } from "./AddTask";

const TaskListComponent = ({
  listOfTasks,
  onAddTaskClick,
  onDeleteTaskClick,
  onCompletetaskClick,
}) => {
  return (
    <div className="tasksListContainer">
      {listOfTasks.map((taskDetails, index) => (
        <Task
          key={taskDetails.id}
          index={index}
          taskDetails={taskDetails}
          handleDeleteClick={onDeleteTaskClick}
          handleCompleteClick={onCompletetaskClick}
        />
      ))}
      <AddTask onAddTaskClick={onAddTaskClick} />
    </div>
  );
};

export const TaskList = React.memo(TaskListComponent);
