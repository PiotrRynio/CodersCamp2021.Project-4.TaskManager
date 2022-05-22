import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { SendEmailCommand } from './application/SendEmailCommand';
import { SendEmailCommandHandler } from './application/SendEmailCommandHandler';
import { CommonModuleCoreProps } from 'shared/Module/CommonModuleCoreProps';

import { TaskWasAddedEvent } from './application/TaskWasAddedEvent';
import { TaskWasAddedEventHandler } from './application/TaskWasAddedEventHandler';

export function SendEmailModuleCore({
  eventPublisher,
  commandPublisher,
  currentTimeProvider,
  entityIdGenerator,
}: CommonModuleCoreProps): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: SendEmailCommand,
        handler: new SendEmailCommandHandler(commandPublisher, currentTimeProvider, entityIdGenerator),
      },
    ],
    eventHandlers: [
      {
        eventType: TaskWasAddedEvent,
        handler: new TaskWasAddedEventHandler(commandPublisher, currentTimeProvider, entityIdGenerator),
      },
    ],
    queryHandlers: [],
  };
}
