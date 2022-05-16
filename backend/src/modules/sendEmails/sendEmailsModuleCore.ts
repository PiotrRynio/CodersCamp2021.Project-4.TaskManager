import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { SendEmail } from './application/SendEmailCommand';
import { SendEmailCommandHandler } from './application/SendEmailCommandHandler';
import { CommonModuleCoreProps } from 'shared/Module/CommonModuleCoreProps';

export function SendEmailModuleCore({
  eventPublisher,
  commandPublisher,
  currentTimeProvider,
  entityIdGenerator,
}: CommonModuleCoreProps): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: SendEmail,
        handler: new SendEmailCommandHandler(eventPublisher, currentTimeProvider, entityIdGenerator),
      },
    ],
    eventHandlers: [],
    queryHandlers: [],
  };
}
