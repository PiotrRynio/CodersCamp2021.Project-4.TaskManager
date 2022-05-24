import { CurrentTimeProvider } from '../../../shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from '../../../shared/Module/core/application/EntityIdGenerator';
import { CommandPublisher } from '../../../shared/Module/core/application/command/CommandBus';

import { EventHandler } from '../../../shared/Module/core/application/event/EventHandler';
import { SendEmailCommand } from './SendEmailCommand';
import { NewTaskWasAddedEvent } from '../../TodoTasks/domain/events/NewTaskWasAddedEvent';

export class NewTaskWasAddedEventHandler implements EventHandler<NewTaskWasAddedEvent> {
  constructor(
    private readonly commandPublisher: CommandPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async handle(event: NewTaskWasAddedEvent): Promise<any> {
    await this.commandPublisher.execute(
      new SendEmailCommand({
        emailAddress: 'pwrynio@gmail.com',
        subject: 'Added new task',
        htmlContent: event.taskName,
      }),
    );
  }
}
