import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { CommonModuleCoreProps } from 'shared/Module/CommonModuleCoreProps';
import { AddTaskCommand } from './application/AddTaskCommand';
import { AddTaskCommandHandler } from './application/AddTaskCommandHandler';

export function todoTasksModuleCore({
  eventPublisher,
  commandPublisher,
  currentTimeProvider,
  entityIdGenerator,
}: CommonModuleCoreProps): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: AddTaskCommand,
        handler: new AddTaskCommandHandler(commandPublisher, currentTimeProvider, entityIdGenerator),
      },
    ],
    eventHandlers: [],
    queryHandlers: [],
  };
}
