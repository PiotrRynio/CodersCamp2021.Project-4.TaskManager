import { DomainEvent } from '../../../../shared/Module/domain/event/DomainEvent';

export class NewEmailWasSentEvent implements DomainEvent {
  readonly occurredAt: Date;
  readonly emailAddress: string;
  readonly subject: string;
  readonly htmlContent: string;

  constructor(props: { emailAddress: string; subject: string; htmlContent: string; occurredAt: Date }) {
    this.occurredAt = props.occurredAt;
    this.emailAddress = props.emailAddress;
    this.subject = props.subject;
    this.htmlContent = props.htmlContent;
  }
}
