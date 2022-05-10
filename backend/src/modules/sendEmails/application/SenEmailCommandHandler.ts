import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { SendEmail } from './SendEmailCommand';
import { EmailSender } from './EmailSender';

export class SendEmailCommandHandler implements CommandHandler<SendEmail> {
  constructor(private readonly emailSender: EmailSender) {}

  async execute(command: SendEmail): Promise<CommandResult> {
    await this.emailSender.sendAnEmail({
      to: command.emailAddress,
      subject: command.subject,
      html: command.htmlContent,
    });

    return CommandResult.success();
  }
}
