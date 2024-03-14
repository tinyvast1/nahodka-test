import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, TaskState } from "../types/task";
import { setTasksInSessionStorage } from "../lib/taskSessionStorage";

const initialState: TaskState = {
  tasks: [],
  idActiveTaskModal: 0,
  isOpenModal: false,
};

const taskClice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTaskOrTasks(state, { payload }: PayloadAction<Task | Task[]>) {
      if (Array.isArray(payload)) {
        state.tasks.push(...payload);
      } else {
        state.tasks.push(payload);
      }
      setTasksInSessionStorage(state.tasks);
    },
    removeTask(state, { payload }: PayloadAction<number>) {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
      setTasksInSessionStorage(state.tasks);
    },
    updateTask(state, { payload }: PayloadAction<Task>) {
      const indexTask = state.tasks.findIndex((item) => item.id === payload.id);
      state.tasks[indexTask] = payload;
      setTasksInSessionStorage(state.tasks);
    },
    openModal(state, { payload }: PayloadAction<number>) {
      state.idActiveTaskModal = payload;
      state.isOpenModal = true;
    },
    closeModal(state) {
      state.isOpenModal = false;
    },
  },
});

export const { actions: taskActions, reducer: taskReducer } = taskClice;
