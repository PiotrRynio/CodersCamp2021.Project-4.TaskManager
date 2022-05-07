import { DomainCommandResult } from '../../../shared/Module/core/domain/DomainCommandResult';
import { TaskId } from './valueObjects/TaskId';
import { UserId } from './valueObjects/UserId';
import { NewTaskWasAddedEvent } from './events/NewTaskWasAddedEvent';

export class Task {
  readonly userId: string;
  readonly taskId: string;
  readonly taskName: string;

  constructor(props: { userId: string; taskName?: string; taskId?: string }) {
    this.userId = props.userId;
    this.taskName = props.taskName || '';
    this.taskId = props.taskId || '';
  }
}

export function addNewTask(currentTime: Date, command: { userId: UserId }): DomainCommandResult<Task> {
  const newState = new Task({
    userId: command.userId.raw,
  });

  const newRegistrationWasSavedEvent = new NewTaskWasAddedEvent({
    ...newState,
    occurredAt: currentTime,
  });

  return { state: newState, events: [NewTaskWasAddedEvent] };
}
