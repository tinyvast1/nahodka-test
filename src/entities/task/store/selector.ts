import { RootState } from "@/app/store";
import { TaskFilterVariant } from "@/features/taskFilter/types";
import { createSelector } from "@reduxjs/toolkit";

export const getFilteredTodos = createSelector(
  (state: RootState) => state.task.tasks,
  (state: RootState) => state.taskFilter.active,
  (tasks, taskFilterActive) =>
    tasks.filter((task) => {
      switch (taskFilterActive) {
        case TaskFilterVariant.ALL:
          return true;
        case TaskFilterVariant.COMPLETED:
          return task.status;
        case TaskFilterVariant.UNFULFILLED:
          return !task.status;
        default:
          return true;
      }
    })
);

export const getDataTaskByIdForModal = createSelector(
  (state: RootState) => state.task.tasks,
  (state: RootState) => state.task.idActiveTaskModal,
  (tasks, idActiveTaskModal) =>
    tasks.find((task) => task.id === idActiveTaskModal)
);
