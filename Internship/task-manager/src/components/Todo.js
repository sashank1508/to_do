import React from "react";
import "./todo.scss";

const TodoLoginComponent = ({ handleLoginClick }) => {
  return (
    <div className="todoLoginContainer">
      <div className="headerContainer">
        <div className="title">Todo</div>
      </div>
      <div className="loginFormContainer">
        <div>
          <span>email:</span>
          <span></span>
        </div>
        <div>
          <span>password:</span>
          <span></span>
        </div>
        <button onClick={handleLoginClick}>login</button>
        <div className="signUp">new user? sign up</div>
      </div>
    </div>
  );
};

export const TodoLogin = React.memo(TodoLoginComponent);
