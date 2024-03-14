import { Wrapper } from "@/shared/ui";
import cls from "./Tasks.module.scss";
import classNames from "classnames";
import { TaskRow } from "@/entities/task";
import { TaskFilter } from "@/features/taskFilter/ui/TaskFilter/TaskFilter";

export function Tasks() {
  return (
    <Wrapper className={classNames(cls.Tasks)}>
      <TaskFilter />
      <div className={cls.TasksHeader}>
        <div>Название</div>
        <div>Описание</div>
      </div>
      <TaskRow />
    </Wrapper>
  );
}
