import { taskReducer } from "@/entities/task/store/slice";
import { taskFilterReducer } from "@/features/taskFilter/store/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const redusers = combineReducers({
  task: taskReducer,
  taskFilter: taskFilterReducer,
});

export const store = configureStore({
  reducer: redusers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
