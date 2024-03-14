import { useActions } from "@/app/store/useActions";
import { changeInput } from "@/shared/lib";
import { Button, Input, Textarea, Wrapper } from "@/shared/ui";
import cls from "./TaskAdd.module.scss";
import { useState, FormEvent } from "react";

export function TaskAdd() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addTaskOrTasks } = useActions();

  const resetForm = () => {
    setName("");
    setDescription("");
  };

  const createTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTaskOrTasks({
      id: Date.now(),
      name,
      description,
      status: false,
    });
    resetForm();
  };

  return (
    <Wrapper className={cls.TaskAdd}>
      <form className={cls.form} onSubmit={createTask}>
        <Input
          onChange={(e) => changeInput(e, setName)}
          name="name"
          required
          type="text"
          placeholder="Введите название"
          value={name}
        />
        <Textarea
          onChange={(e) => changeInput(e, setDescription)}
          name="description"
          placeholder="Введите описание"
          value={description}
        />
        <Button>Создать задачу</Button>
      </form>
    </Wrapper>
  );
}
