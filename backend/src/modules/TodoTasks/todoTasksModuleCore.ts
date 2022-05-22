import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { CommonModuleCoreProps } from 'shared/Module/CommonModuleCoreProps';
import { AddTaskCommand } from './application/AddTaskCommand';
import { AddTaskCommandHandler } from './application/AddTaskCommandHandler';

export function todoTasksModuleCore({
  eventPublisher,
  commandPublisher,
  currentTimeProvider,
  repository,
  entityIdGenerator,
}: CommonModuleCoreProps): ModuleCore {
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
