import { DomainCommandResult } from '../../../shared/Module/core/domain/DomainCommandResult';
import { NewEmailWasSavedEvent } from './events/NewEmailWasSavedEvent';
import { EmailAddress } from './valueObjects/EmailAddress';
import { UserEmailId } from './valueObjects/UserEmailId';

export class EmailsList {
  readonly userEmailId: string;
  readonly userEmail: string;

  constructor(props: { userEmailId: string; userEmail: string }) {
    this.userEmailId = props.userEmailId;
    this.userEmail = props.userEmail;
  }
}

export function registerNewRecord(
  currentTime: Date,
  registrationId: UserEmailId,
  command: { userEmail: EmailAddress },
): DomainCommandResult<EmailsList> {
  const newState = new EmailsList({
    userEmailId: registrationId.raw,
    userEmail: command.userEmail.raw,
  });

  const newRegistrationWasSavedEvent = new NewEmailWasSavedEvent({
    ...newState,
    occurredAt: currentTime,
  });

  return { state: newState, events: [newRegistrationWasSavedEvent] };
}
