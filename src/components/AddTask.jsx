import "./AddTask.css";
export const AddTask = ({ taskList, setTaskList, editTask, setEditTask }) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    if (editTask.id) {
      const date = new Date();
      const updatedTaskList=taskList.map((task)=>(task.id === editTask.id? {id:editTask.id,
        // name:e.target.task.value,
        name:editTask.name,
        time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:task))
      setTaskList(updatedTaskList);
      // e.target.task.value="";
      setEditTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      if (newTask.name) {
        setTaskList([...taskList, newTask]);
      }
      // e.target.task.value="";
      setEditTask({});
    }
  };
  return (
    <section className="add-task">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={editTask.name || ""}
          autoComplete="off"
          placeholder="Add Task"
          maxLength="30"
          name="task"
          onChange={(e)=>{
            setEditTask({...editTask,name:e.target.value});
          }}
        />
        <button type="submit">{editTask.id?"Update":"Add"}</button>
      </form>
    </section>
  );
};
