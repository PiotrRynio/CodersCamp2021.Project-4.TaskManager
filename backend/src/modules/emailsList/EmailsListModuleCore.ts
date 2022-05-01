import { DomainEventPublisher } from '../../shared/Module/core/application/event/DomainEventBus';
import { CommandPublisher } from '../../shared/Module/core/application/command/CommandBus';
import { CurrentTimeProvider } from '../../shared/Module/core/CurrentTimeProvider';
import { ModuleCore } from '../../shared/Module/core/ModuleCore';
import { EntityIdGenerator } from '../../shared/Module/core/application/EntityIdGenerator';
import { EmailListRepository } from './application/EmailListRepository';
import { AddEmailCommand } from './application/AddEmailCommand';
import { AddEmailCommandHandler } from './application/AddEmailCommandHandler';
import { FindAllEmailsQueryHandler } from './application/FindAllEmailsQueryHandler';
import { FindAllEmailsQuery } from './application/FindAllEmailsQuery';

export function EmailsListModuleCore(
  eventPublisher: DomainEventPublisher,
  commandPublisher: CommandPublisher,
  currentTimeProvider: CurrentTimeProvider,
  entityIdGenerator: EntityIdGenerator,
  repository: EmailListRepository,
): ModuleCore {
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
