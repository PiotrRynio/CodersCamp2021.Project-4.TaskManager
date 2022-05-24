import { QueryHandler } from '../../../shared/Module/core/application/query/QueryHandler';
import { FindAllTasksQuery, FindAllTasksQueryResult } from './FindAllTasksQuery';
import { TaskRepository } from './TaskRepository';

export class FindAllTasksQueryHandler implements QueryHandler<FindAllTasksQuery, FindAllTasksQueryResult> {
  constructor(private readonly repository: TaskRepository) {}

  execute(query: FindAllTasksQuery): Promise<FindAllTasksQueryResult> {
    return this.repository.findAllTasks();
  }
}
