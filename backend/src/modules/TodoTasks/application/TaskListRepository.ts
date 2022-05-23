import { Task } from '../domain/Task';

export interface TaskListRepository {
  save(newTask: Task): Promise<void>;

  findAll(): Promise<Task[]>;
}
