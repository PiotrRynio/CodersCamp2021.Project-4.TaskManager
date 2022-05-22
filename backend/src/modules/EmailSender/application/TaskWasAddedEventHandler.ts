import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { CommandPublisher } from 'shared/Module/core/application/command/CommandBus';

import { TaskWasAddedEvent } from './TaskWasAddedEvent';
import { EventHandler } from 'shared/Module/core/application/event/EventHandler';
import { SendEmailCommand } from './SendEmailCommand';

export class TaskWasAddedEventHandler implements EventHandler<TaskWasAddedEvent> {
  constructor(
    private readonly commandPublisher: CommandPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async handle(event: TaskWasAddedEvent): Promise<any> {
    await this.commandPublisher.execute(
      new SendEmailCommand({
        emailAddress: event.emailAddress,
        subject: event.subject,
        htmlContent: event.content,
      }),
    );
  }
}
