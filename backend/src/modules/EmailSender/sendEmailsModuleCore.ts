import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { SendEmailCommand } from './application/SendEmailCommand';
import { SendEmailCommandHandler } from './application/SendEmailCommandHandler';
import { CommonModuleCoreProps } from '../../shared/Module/CommonModuleCoreProps';

import { NewTaskWasAddedEvent } from '../TodoTasks/domain/events/NewTaskWasAddedEvent';
import { NewTaskWasAddedEventHandler } from './application/NewTaskWasAddedEventHandler';

export function SendEmailsModuleCore({
  eventPublisher,
  commandPublisher,
  currentTimeProvider,
  entityIdGenerator,
}: CommonModuleCoreProps): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: SendEmailCommand,
        handler: new SendEmailCommandHandler(eventPublisher, currentTimeProvider, entityIdGenerator),
      },
    ],
    eventHandlers: [
      {
        eventType: NewTaskWasAddedEvent,
        handler: new NewTaskWasAddedEventHandler(commandPublisher, currentTimeProvider, entityIdGenerator),
      },
    ],
    queryHandlers: [],
  };
}
