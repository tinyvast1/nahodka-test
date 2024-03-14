export interface Task {
  readonly id: number;
  name: string;
  description: string;
  status: boolean;
}

export interface TaskState {
  tasks: Task[];
  isOpenModal: boolean;
  idActiveTaskModal: number;
}
