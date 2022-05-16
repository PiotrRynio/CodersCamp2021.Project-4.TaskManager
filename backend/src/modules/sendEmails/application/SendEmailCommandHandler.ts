import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { DomainEventPublisher } from 'shared/Module/core/application/event/DomainEventBus';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { SendEmail } from './SendEmailCommand';
import { EmailSender } from './EmailSender';

export class SendEmailCommandHandler implements CommandHandler<SendEmail> {
  constructor(
    private readonly eventPublisher: DomainEventPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async execute(command: SendEmail): Promise<CommandResult> {
    await this.emailSender.sendAnEmail({
      emailAddress: command.emailAddress,
      subject: command.subject,
      htmlContent: command.htmlContent,
    });

    return CommandResult.success();
  }
}