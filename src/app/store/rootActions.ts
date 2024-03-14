import { taskActions } from "@/entities/task/store/slice";
import { taskFilterActions } from "@/features/taskFilter/store/slice";

export const rootActions = {
  ...taskActions,
  ...taskFilterActions,
};
