import { TaskRepository } from '../../application/TaskRepository';
import { Task } from '../../domain/Task';

export class InMemoryTasksRepository implements TaskRepository {
  private readonly entities: { [id: string]: Task } = {};

  async addTask(newTask: Task): Promise<void> {
    this.entities[newTask.taskId] = newTask;
  }

  findAllTasks(): Promise<Task[]> {
    return Promise.resolve(Object.keys(this.entities).map((id) => this.entities[id]));
  }
}
