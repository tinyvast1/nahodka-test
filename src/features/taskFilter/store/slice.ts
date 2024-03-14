import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskFilterState, TaskFilterVariant } from "../types";

const initialState: TaskFilterState = {
  active: TaskFilterVariant.ALL,
};

const taskFilterClice = createSlice({
  name: "taskFilter",
  initialState,
  reducers: {
    setFilterValue(state, { payload }: PayloadAction<TaskFilterVariant>) {
      state.active = payload;
    },
  },
});

export const { actions: taskFilterActions, reducer: taskFilterReducer } =
  taskFilterClice;
