import { Task } from '../domain/Task';

export interface TaskRepository {
  addTask(newTask: Task): Promise<void>;

  findAllTasks(): Promise<Task[]>;
}
