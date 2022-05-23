import { CommandPublisher } from '../../../../shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from '../../../../shared/Module/core/application/event/DomainEventBus';
import { QueryPublisher } from '../../../../shared/Module/core/application/query/QueryBus';
import { ModuleRestApi } from '../../../../shared/Module/presentation/rest-api/ModuleRestApi';
import { FULL_TASK_MODULE_PATH } from '../../constants';
import { taskRouter } from './TasksRouter';

export function TasksRestApiModule(
  commandPublisher: CommandPublisher,
  eventPublisher: DomainEventPublisher,
  queryPublisher: QueryPublisher,
): ModuleRestApi {
  return {
    router: taskRouter(commandPublisher, eventPublisher, queryPublisher),
    path: FULL_TASK_MODULE_PATH,
  };
}
