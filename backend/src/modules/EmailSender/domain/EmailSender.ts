import { DomainCommandResult } from '../../../shared/Module/core/domain/DomainCommandResult';
import { NewEmailWasSentEvent } from './events/NewEmailWasSentEvent';

export class EmailSender {
  readonly emailAddress: string;
  readonly subject: string;
  readonly htmlContent: string;

  constructor(props: { emailAddress: string; subject: string; htmlContent: string }) {
    this.emailAddress = props.emailAddress;
    this.subject = props.subject;
    this.htmlContent = props.htmlContent;
  }
}

export function sendEmail({
  emailAddress,
  subject,
  htmlContent,
  date,
}: {
  emailAddress: string;
  subject: string;
  htmlContent: string;
  date: Date;
}): DomainCommandResult<EmailSender> {
  // TODO: send email here
  console.log(`
   💥
    Email was sent to: ${emailAddress}, 
    email subject: ${subject},
    email content: ${htmlContent},
    email date: ${date}
  `);

  const newState = new EmailSender({
    emailAddress,
    subject,
    htmlContent,
  });

  const newEmailWasSentEvent = new NewEmailWasSentEvent({
    occurredAt: date,
    ...newState,
  });

  return {
    state: newState,
    events: [newEmailWasSentEvent],
  };
}
