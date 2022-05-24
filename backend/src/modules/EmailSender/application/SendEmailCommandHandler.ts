import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { SendEmailCommand } from './SendEmailCommand';
import { sendEmail } from '../domain/EmailSender';
import { DomainEventPublisher } from '../../../shared/Module/core/application/event/DomainEventBus';

export class SendEmailCommandHandler implements CommandHandler<SendEmailCommand> {
  constructor(
    private readonly eventPublisher: DomainEventPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async execute(command: SendEmailCommand): Promise<CommandResult> {
    const { events } = sendEmail({
      emailAddress: command.emailAddress,
      subject: command.subject,
      htmlContent: command.htmlContent,
      date: this.currentTimeProvider(),
    });

    this.eventPublisher.publishAll(events);
    return CommandResult.success();
  }
}
