import { Task } from '../domain/Task';

export interface TaskListRepository {
  save(registration: Task): Promise<void>;

  findAll(): Promise<Task[]>;
}
