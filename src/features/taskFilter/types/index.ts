export enum TaskFilterVariant {
  ALL = "all",
  COMPLETED = "completed",
  UNFULFILLED = "unfulfilled",
}

export interface TaskFilterState {
  active: TaskFilterVariant;
}

export interface VariantFilterType {
  type: TaskFilterVariant;
  text: string;
}
