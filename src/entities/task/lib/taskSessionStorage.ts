import { Task } from "../types/task";

const KEY_TASKS_SESSION_STORAGE = "tasks";

export const getTasksFromSessionStorage = (): Task[] | undefined => {
  const tasks = window.sessionStorage.getItem(KEY_TASKS_SESSION_STORAGE);
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return undefined;
  }
};

export const setTasksInSessionStorage = (tasks: Task[]) => {
  window.sessionStorage.setItem(
    KEY_TASKS_SESSION_STORAGE,
    JSON.stringify(tasks)
  );
};
