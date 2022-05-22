import { DomainEvent } from 'shared/Module/domain/event/DomainEvent';

export class TaskWasAddedEvent implements DomainEvent {
  readonly emailAddress: string;
  readonly subject: string;
  readonly content: string;
  readonly occurredAt: Date;

  constructor(props: { emailAddress: string; subject: string; content: string; occurredAt: Date }) {
    this.emailAddress = props.emailAddress;
    this.subject = props.subject;
    this.content = props.content;
    this.occurredAt = props.occurredAt;
  }
}
