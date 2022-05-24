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

export function addNewTask({
  currentTime,
  command,
}: {
  currentTime: Date;
  command: {
    taskName: string;
    userId: UserId;
    taskId: TaskId;
  };
}): DomainCommandResult<Task> {
  const newState = new Task({
    userId: command.userId.raw,
    taskName: command.taskName,
    taskId: command.taskId.raw,
  });

  const newTaskWasAddedEvent = new NewTaskWasAddedEvent({
    ...newState,
    occurredAt: currentTime,
  });

  return { state: newState, events: [newTaskWasAddedEvent] };
}
