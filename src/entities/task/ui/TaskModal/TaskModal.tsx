import { RootState } from "@/app/store";
import classNames from "classnames";
import Modal from "react-modal";
import cls from "./TaskModal.module.scss";
import { useSelector } from "react-redux";
import Close from "@/app/assets/close.svg?react";
import { Button, ButtonTheme } from "@/shared/ui";
import { useActions } from "@/app/store/useActions";
import { getDataTaskByIdForModal } from "../../store/selector";

export function TaskModal() {
  const { closeModal, updateTask, removeTask } = useActions();
  const isOpen = useSelector((state: RootState) => state.task.isOpenModal);
  const taskData = useSelector(getDataTaskByIdForModal);

  if (taskData) {
    const { description, id, name, status } = taskData;

    const toggleStatus = () => {
      updateTask({ ...taskData, status: !status });
    };
    const clickDeleteTask = () => {
      removeTask(id);
      closeModal();
    };

    return (
      <Modal isOpen={isOpen} className={classNames(cls.TaskModal)}>
        <Button
          className={cls.close}
          onClick={() => closeModal()}
          theme={ButtonTheme.CLEAR}
        >
          <Close />
        </Button>
        <div className={classNames(cls.title, cls.text)}>{name}</div>
        <div className={cls.text}>{description}</div>
        <div className={cls.btns}>
          <Button
            onClick={() => toggleStatus()}
            className={classNames({
              [cls.completed]: !status,
              [cls.unfulfilled]: status,
            })}
          >
            {status ? "Возобновить" : "Завершить"}
          </Button>
          <Button onClick={() => clickDeleteTask()} className={cls.delete}>
            Удалить
          </Button>
        </div>
      </Modal>
    );
  } else {
    return (
      <Modal isOpen={isOpen} className={classNames(cls.TaskModal)}>
        Произошла ошибка. Попробуйте перезагрузить страницу и заново открыть
        задачу.
      </Modal>
    );
  }
}
