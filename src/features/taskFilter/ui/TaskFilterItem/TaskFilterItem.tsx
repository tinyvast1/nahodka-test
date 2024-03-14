import { FC, PropsWithChildren } from "react";
import cls from "./TaskFilterItem.module.scss";
import classNames from "classnames";
import { Button, ButtonTheme } from "@/shared/ui";
import { TaskFilterVariant } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useActions } from "@/app/store/useActions";

interface TaskFilterItemProps extends PropsWithChildren {
  className?: string;
  type: TaskFilterVariant;
}

export const TaskFilterItem: FC<TaskFilterItemProps> = (props) => {
  const { children, className, type, ...otherProps } = props;
  const filterActive = useSelector(
    (state: RootState) => state.taskFilter.active
  );
  const themeButton =
    type === filterActive ? ButtonTheme.BACKGROUND : ButtonTheme.OUTLINE;
  const { setFilterValue } = useActions();

  return (
    <Button
      onClick={() => setFilterValue(type)}
      theme={themeButton}
      className={classNames(cls.TaskFilterItem, className)}
      {...otherProps}
    >
      {children}
    </Button>
  );
};
