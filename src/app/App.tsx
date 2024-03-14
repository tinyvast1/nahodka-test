import { TaskAdd } from "@/features/taskAdd";
import { Tasks } from "@/widgets/Tasks";
import { useEffect } from "react";
import { useActions } from "./store/useActions";
import { TaskModal, getTasksFromSessionStorage } from "@/entities/task";

function App() {
  const { addTaskOrTasks } = useActions();

  useEffect(() => {
    const tasks = getTasksFromSessionStorage();
    if (tasks) {
      addTaskOrTasks(tasks);
    }
  }, []);

  return (
    <div className="app">
      <TaskAdd />
      <Tasks />
      <TaskModal />
    </div>
  );
}

export default App;
