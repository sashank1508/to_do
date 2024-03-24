import React from "react";
import leftArrow from "../assets/left-arrow.svg";
import checkMark from "../assets/checkmark.svg";
import clearFilter from "../assets/clear-filter.svg";

const TasksHeaderComponent = ({
  handleLoginClick,
  onFilterClick,
  onClearFilter,
  isFilterApplied,
}) => {
  return (
    <div className="headerContainer">
      <button onClick={handleLoginClick}>
        <img alt="back-button" src={leftArrow} height={32} width={48} />
      </button>
      <div className="title">Tasks</div>
      <div className="filterButtons">
        <button onClick={() => onFilterClick(false)}>
          <img alt="back-button" src={checkMark} height={24} width={24} />
        </button>
        <button onClick={() => onFilterClick(true)} className="completed">
          <img alt="back-button" src={checkMark} height={24} width={24} />
        </button>
        {isFilterApplied && (
          <button onClick={() => onClearFilter()}>
            <img alt="back-button" src={clearFilter} height={24} width={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export const TasksHeader = React.memo(TasksHeaderComponent);
