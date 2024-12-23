import { useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import "./App.css";
import { TaskList } from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState({});
  

  // document.documentElement.classList.
  return (
    <>
        <Header />
        <AddTask
          taskList={taskList}
          setTaskList={setTaskList}
          editTask={editTask}
          setEditTask={setEditTask}
        />
        {/* {console.log(taskList)} */}
        <TaskList
          taskList={taskList}
          setTaskList={setTaskList}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      {console.log(editTask)}
    </>
  );
}

export default App;
