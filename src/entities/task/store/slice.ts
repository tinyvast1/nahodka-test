import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, TaskState } from "../types/task";

const initialState: TaskState = {
  tasks: []
}

const taskClice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTaskOrTasks(state, {payload}: PayloadAction<Task|Task[]>) {
      if (Array.isArray(payload)) {
        state.tasks.push(...payload)
      } else {
        state.tasks.push(payload)
      }
    },
    removeTask(state, {payload}: PayloadAction<number>) {
      state.tasks = state.tasks.filter((item) => item.id !== payload)
    }
  }
})

export const {actions: taskActions, reducer: taskReducer} = taskClice;