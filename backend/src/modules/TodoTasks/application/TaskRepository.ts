import { Task } from '../domain/Task';

export interface TaskRepository {
  add(newTask: Task): Promise<void>;

  findAll(): Promise<Task[]>;
}
