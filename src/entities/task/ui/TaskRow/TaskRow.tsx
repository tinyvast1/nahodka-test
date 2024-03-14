import { useSelector } from "react-redux";
import { getFilteredTodos } from "../../store/selector";
import { TaskCard } from "../TaskCard/TaskCard";
import cls from "./TaskRow.module.scss";

export function TaskRow() {
  const tasks = useSelector(getFilteredTodos);

  return (
    <div className={cls.TaskRow}>
      {tasks.map((item) => (
        <TaskCard key={item.id} taskData={item} />
      ))}
    </div>
  );
}
