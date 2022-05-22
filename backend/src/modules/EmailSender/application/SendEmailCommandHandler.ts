import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { CommandPublisher } from 'shared/Module/core/application/command/CommandBus';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { SendEmailCommand } from './SendEmailCommand';
import { sendEmail } from '../domain/EmailSender';

export class SendEmailCommandHandler implements CommandHandler<SendEmailCommand> {
  constructor(
    private readonly commandPublisher: CommandPublisher,
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

    // TODO: Użyj "commandPublisher" do opublikowania eventu. Aktualnie jest on wyciągany, ale nie jest publikowany. Zerknij jak dzieje się te we wzorze.

    return CommandResult.success();
  }
}
