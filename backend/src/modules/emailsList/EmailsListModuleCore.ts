import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { AddEmailCommand } from './application/AddEmailCommand';
import { AddEmailCommandHandler } from './application/AddEmailCommandHandler';
import { FindAllEmailsQueryHandler } from './application/FindAllEmailsQueryHandler';
import { FindAllEmailsQuery } from './application/FindAllEmailsQuery';
import { CommonModuleCoreProps } from '../../shared/Module/CommonModuleCoreProps';
import { EmailListRepository } from './application/EmailListRepository';

export function EmailsListModuleCore({
  eventPublisher,
  commandPublisher,
  currentTimeProvider,
  entityIdGenerator,
  repository,
}: CommonModuleCoreProps & { repository: EmailListRepository }): ModuleCore {
  return {
    commandHandlers: [
      {
        commandType: AddEmailCommand,
        handler: new AddEmailCommandHandler(
          eventPublisher,
          currentTimeProvider,
          repository,
          entityIdGenerator,
        ),
      },
    ],
    eventHandlers: [],
    queryHandlers: [
      {
        queryType: FindAllEmailsQuery,
        handler: new FindAllEmailsQueryHandler(repository),
      },
    ],
  };
}
