import { FC, PropsWithChildren } from "react";
import cls from "./TaskFilter.module.scss";
import classNames from "classnames";
import { TaskFilterVariant, VariantFilterType } from "../../types";
import { TaskFilterItem } from "../TaskFilterItem/TaskFilterItem";

interface TaskFilterProps extends PropsWithChildren {
  className?: string;
}

export const TaskFilter: FC<TaskFilterProps> = (props) => {
  const { className, ...otherProps } = props;
  const variantsFilter: VariantFilterType[] = [
    {
      type: TaskFilterVariant.ALL,
      text: "Все",
    },
    {
      type: TaskFilterVariant.COMPLETED,
      text: "Выполненны",
    },
    {
      type: TaskFilterVariant.UNFULFILLED,
      text: "Невыполненные",
    },
  ];

  return (
    <div className={classNames(cls.TaskFilter, className)} {...otherProps}>
      {variantsFilter.map((item, i) => (
        <TaskFilterItem key={i} type={item.type}>
          {item.text}
        </TaskFilterItem>
      ))}
    </div>
  );
};
