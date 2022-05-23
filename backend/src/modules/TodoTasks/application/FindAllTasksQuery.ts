import { Task } from '../domain/Task';

export class FindAllTasksQuery {
  constructor() {}
}

export type FindAllTasksQueryResult = Task[];
