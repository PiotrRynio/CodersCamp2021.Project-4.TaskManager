import { DomainEvent } from '../../../../shared/Module/domain/event/DomainEvent';

export class NewEmailWasSavedEvent implements DomainEvent {
  readonly occurredAt: Date;
  readonly userEmailId: string;
  readonly userEmail: string;

  constructor(props: { occurredAt: Date; userEmailId: string; userEmail: string }) {
    this.occurredAt = props.occurredAt;
    this.userEmailId = props.userEmailId;
    this.userEmail = props.userEmail;
  }
}
