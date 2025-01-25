// import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import "./App.css";
import { TaskList } from "./components/TaskList";
// import { useDispatch,useSelector } from "react-redux";
function App() {
  // const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist"))||[]);
  // const [editTask, setEditTask] = useState({});
  // useEffect(()=>{
  // localStorage.setItem("tasklist",JSON.stringify(taskList));
  // },[taskList])

  return (
    <>
        <Header />
        <AddTask />
        <TaskList />
    </>
  );
}

export default App;
