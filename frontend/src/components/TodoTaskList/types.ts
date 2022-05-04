export type TodoTaskProps = {
  text: string;
  onStarClick(): void;
  onDoneClick(): void;
  isDone: boolean;
  isImportant: boolean;
};

export type TodoTaskListProps = {
  todoTasks: TodoTaskProps[];
};
