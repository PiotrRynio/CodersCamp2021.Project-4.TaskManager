import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { SendEmail } from './application/SendEmailCommand';
import { SendEmailCommandHandler } from './application/SenEmailCommandHandler';
import { EmailSender } from './application/EmailSender';

export function SendEmailModuleCore(emailSender: EmailSender): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: SendEmail,
        handler: new SendEmailCommandHandler(emailSender),
      },
    ],
    eventHandlers: [],
    queryHandlers: [],
  };
}
