// Commands: npm i
//           npm start

import { TasksContainer } from "./components/TasksContainer";

import "./App.css";
import { TodoLogin } from "./components/Todo";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <TasksContainer handleLoginClick={handleLoginClick} />
       ) : (
        <TodoLogin handleLoginClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
