import { DomainEvent } from '../../../../shared/Module/domain/event/DomainEvent';

export class NewTaskWasAddedEvent implements DomainEvent {
  readonly occurredAt: Date;
  readonly userId: string;
  readonly taskId: string;
  readonly taskName: string;

  constructor(props: { occurredAt: Date; userId: string; taskName: string; taskId: string }) {
    this.occurredAt = props.occurredAt;
    this.userId = props.userId;
    this.taskName = props.taskName;
    this.taskId = props.taskId;
  }
}
