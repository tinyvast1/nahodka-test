export interface Task {
  id: number,
  name: string,
  description: string,
  status: boolean
}

export interface TaskState {
  tasks: Task[]
}