import "./TaskList.css";
export const TaskList = ({ taskList, setTaskList, editTask, setEditTask }) => {
  const handleDelete = (id) => {
    const newList = taskList.filter((task) => task.id !== id);
    setTaskList(newList);
  };
  const handleEdit = (id) => {
    const extractTask = taskList.find((task) => (id===task.id));
    setEditTask(extractTask);
  };
  return (
    <section className="tasklist">
      <div className="head">
        <div>
          <span>TO DO</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button
          onClick={() => {
            setTaskList([]);
          }}
        >
          Clear All
        </button>
      </div>
      <ul>
        {taskList &&
          taskList.map((task) => (
            <li key={task.id}>
              <div>
                <p>{task.name}</p>
                <span>{task.time}</span>
              </div>
              <div className="edit-delete">
                <i
                  className="bi bi-pencil-square edit"
                  onClick={() => {
                    handleEdit(task.id);
                  }}
                ></i>
                <i
                  className="bi bi-trash3 delete"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                ></i>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
