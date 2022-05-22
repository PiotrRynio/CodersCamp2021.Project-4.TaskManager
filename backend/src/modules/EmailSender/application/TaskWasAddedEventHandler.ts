import { DomainEventPublisher } from 'shared/Module/core/application/event/DomainEventBus';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';

import { TaskWasAddedEvent } from './TaskWasAddedEvent';
import { EventHandler } from 'shared/Module/core/application/event/EventHandler';

export class TaskWasAddedEventHandler implements EventHandler<TaskWasAddedEvent> {
  constructor(
    private readonly eventPublisher: DomainEventPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async handle(event: TaskWasAddedEvent): Promise<any> {
    // Todo: wysłanie maila przez funkcje domenową
  }

  //   async execute(command: SendEmailCommand): Promise<CommandResult> {
  //     await this.emailSender.sendAnEmail({
  //       emailAddress: command.emailAddress,
  //       subject: command.subject,
  //       htmlContent: command.htmlContent,
  //     });

  // return CommandResult.success();
  //   }
}
