import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { AddTaskCommand } from './application/AddTaskCommand';
import { AddTaskCommandHandler } from './application/AddTaskCommandHandler';
import { CommonModuleCoreProps } from '../../shared/Module/CommonModuleCoreProps';
import { TaskRepository } from './application/TaskRepository';

export function todoTasksModuleCore({
  eventPublisher,
  currentTimeProvider,
  entityIdGenerator,
  repository,
}: CommonModuleCoreProps & { repository: TaskRepository }): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: AddTaskCommand,
        handler: new AddTaskCommandHandler(
          eventPublisher,
          currentTimeProvider,
          repository,
          entityIdGenerator,
        ),
      },
    ],
    eventHandlers: [],
    queryHandlers: [],
  };
}
