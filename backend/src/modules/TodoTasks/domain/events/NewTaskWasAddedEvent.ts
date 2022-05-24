import { DomainEvent } from '../../../../shared/Module/domain/event/DomainEvent';

export class NewTaskWasAddedEvent implements DomainEvent {
  readonly occurredAt: Date;
  readonly userId: string;
  readonly taskId: string;
  readonly taskName: string;
  readonly isDone: boolean;
  readonly isImportant: boolean;

  constructor(props: {
    occurredAt: Date;
    userId: string;
    taskName: string;
    taskId: string;
    isDone: boolean;
    isImportant: boolean;
  }) {
    this.occurredAt = props.occurredAt;
    this.userId = props.userId;
    this.taskName = props.taskName;
    this.taskId = props.taskId;
    this.isDone = props.isDone;
    this.isImportant = props.isDone;
  }
}
