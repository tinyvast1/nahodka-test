import { FC, PropsWithChildren, MouseEvent } from "react";
import cls from "./TaskCard.module.scss";
import { Task } from "../../types/task";
import Delete from "../../assets/task-delete.svg?react";
import Completed from "../../assets/task-completed.svg?react";
import Unfulfilled from "../../assets/task-unfulfilled.svg?react";
import classNames from "classnames";
import { useActions } from "@/app/store/useActions";
import { Button, ButtonTheme } from "@/shared/ui";

interface TaskCardProps extends PropsWithChildren {
  className?: string;
  taskData: Task;
}

export const TaskCard: FC<TaskCardProps> = (props) => {
  const { className, taskData, ...otherProps } = props;
  const { name, status, description, id } = taskData;
  const { removeTask, updateTask, openModal } = useActions();

  const toggleStatus = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateTask({ ...taskData, status: !status });
  };

  const clickRemoveTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    removeTask(id);
  };

  return (
    <div
      onClick={() => openModal(id)}
      className={classNames(cls.TaskCard, className)}
      {...otherProps}
    >
      <div className={classNames(cls.text, cls.name)}>{name}</div>
      <div className={cls.text}>{description}</div>
      <Button onClick={(e) => toggleStatus(e)} theme={ButtonTheme.CLEAR}>
        {status ? <Completed /> : <Unfulfilled />}
      </Button>
      <Button onClick={(e) => clickRemoveTask(e)} theme={ButtonTheme.CLEAR}>
        <Delete />
      </Button>
    </div>
  );
};
