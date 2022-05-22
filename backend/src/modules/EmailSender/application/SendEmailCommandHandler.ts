import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { CommandPublisher } from 'shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from 'shared/Module/core/application/event/DomainEventBus';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { SendEmailCommand } from './SendEmailCommand';
import { EmailSender } from '../domain/EmailSender';
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

    // const { state, events } = registerNewRecord(
    //   this.currentTimeProvider(),
    //   new UserEmailId(this.entityIdGenerator.generate()),
    //   { userEmail: new EmailAddress(command.userEmail) },
    // );

    // await this.repository.save(state);
    // const allRegistrations = await this.repository.findAll();
    // this.eventPublisher.publishAll(events);
    // return CommandResult.success(allRegistrations);

    return CommandResult.success();
  }
}
