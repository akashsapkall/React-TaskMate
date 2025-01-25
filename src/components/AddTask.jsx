import "./AddTask.css";
import { useDispatch, useSelector } from "react-redux";
import { add, getUpdate, update } from "../store/taskSlice";
export const AddTask = () => {
  const dispatch = useDispatch();
  const editTask = useSelector((state) => state.taskState.editTask);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (editTask.id) {
      const date = new Date();
      const updatedEditTask = {
        id: editTask.id,
        name: editTask.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      dispatch(getUpdate(updatedEditTask));
      dispatch(update({}));
      // e.target.task.value="";
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      dispatch(add(newTask));
      dispatch(update({}));
      // if (newTask.name) {
      // setTaskList([...taskList, newTask]);
      // }
      // e.target.task.value="";
      // setEditTask({});
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
          onChange={(e) => {
            dispatch(update({ ...editTask, name: e.target.value }));
          }}
        />
        <button type="submit">{editTask.id ? "Update" : "Add"}</button>
        {/* <button type="submit">Add</button> */}
      </form>
    </section>
  );
};
