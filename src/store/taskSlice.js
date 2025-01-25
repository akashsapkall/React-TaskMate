import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "Task",
  initialState: {
    taskList: [],
    editTask: {},
  },
  reducers: {
    add(state, action) {
      // Add the new task to the taskList
      state.taskList.push(action.payload);
    },
    remove(state, action) {
      // Remove the task with the specified ID
      if(action.payload.id===state.editTask.id){
        state.editTask={};
      }
      state.taskList = state.taskList.filter((task) => task.id !== action.payload.id);
    },
    clearAll(state) {
      // Clear all tasks and reset editTask
      state.taskList = [];
      state.editTask = {};
    },
    update(state, action) {
      state.editTask=action.payload;
    },
    getUpdate(state, action){
        state.taskList=state.taskList.map((task) => task.id === action.payload.id ?action.payload:task);
    }
  },
});

export const { add, remove, clearAll, update, getUpdate } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
