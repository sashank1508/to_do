import React, { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "./TaskList";
import "./tasksContainer.scss";
import { TasksHeader } from "./TasksHeader";
import axios from "axios";

const dummydata = [
  {
    id: uuidv4(),
    description:
      "This is test task one whic is having a long string that I am checking whether it come in new line or not",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    description: "This is test task 2",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    description: "This is test task 3",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    description: "This is test task 4",
    isCompleted: true,
  },
  {
    id: uuidv4(),
    description: "This is test task 4",
    isCompleted: false,
  },
];

const TaskContainerComponent = ({ handleLoginClick }) => {
  const [listOfTasks, setListOftasks] = useState([...dummydata]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // const fetchTasks = async () => {
  //   axios.get("endPoint").then((responce) => {
  //     setListOftasks(responce);
  //   });
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  const handleOnAddTaskClick = useCallback((taskDetails) => {
    setListOftasks((prevTasks) => [
      ...prevTasks,
      { ...taskDetails, id: uuidv4() },
    ]);
  }, []);

  const handleOnDelteTask = useCallback(
    (taskId) => {
      const filteredTasks = listOfTasks.filter((task) => task.id !== taskId);
      setListOftasks(() => [...filteredTasks]);
    },
    [listOfTasks]
  );

  const handleCompleteTaskClick = useCallback(
    (taskId) => {
      const updatedTasks = listOfTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }

        return task;
      });
      setListOftasks(() => [...updatedTasks]);
    },
    [listOfTasks]
  );

  const onFilterClick = useCallback(
    (filterOption) => {
      setIsFilterApplied(true);
      const filteredTasks = listOfTasks.filter(
        (task) => task.isCompleted === filterOption
      );
      setFilteredTasks(() => [...filteredTasks]);
    },
    [listOfTasks]
  );

  const onClearFilter = useCallback(() => {
    setIsFilterApplied(false);
  }, []);

  return (
    <div className="tasksContainer">
      <TasksHeader
        handleLoginClick={handleLoginClick}
        onFilterClick={onFilterClick}
        onClearFilter={onClearFilter}
        isFilterApplied={isFilterApplied}
      />
      <TaskList
        listOfTasks={isFilterApplied ? filteredTasks : listOfTasks}
        onAddTaskClick={handleOnAddTaskClick}
        onDeleteTaskClick={handleOnDelteTask}
        onCompletetaskClick={handleCompleteTaskClick}
      />
    </div>
  );
};

export const TasksContainer = React.memo(TaskContainerComponent);
