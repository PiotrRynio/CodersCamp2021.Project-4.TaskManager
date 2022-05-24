import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { CommandPublisher } from 'shared/Module/core/application/command/CommandBus';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { AddTaskCommand } from './AddTaskCommand';
import { addNewTask } from '../domain/Task';
import { UserId } from '../domain/valueObjects/UserId';
import { TaskId } from '../domain/valueObjects/TaskId';
import { DomainEventPublisher } from '../../../shared/Module/core/application/event/DomainEventBus';
import { TaskRepository } from './TaskRepository';

export class AddTaskCommandHandler implements CommandHandler<AddTaskCommand> {
  constructor(
    private readonly eventPublisher: DomainEventPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly repository: TaskRepository,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async execute(command: AddTaskCommand): Promise<CommandResult> {
    const { state, events } = addNewTask({
      currentTime: this.currentTimeProvider(),
      command: {
        taskName: command.taskName,
        taskId: new TaskId(this.entityIdGenerator.generate()),
        userId: new UserId(command.userId),
        isDone: command.isDone,
        isImportant: command.isImportant,
      },
    });

    await this.repository.addTask(state);
    const allTodoTask = await this.repository.findAllTasks();
    this.eventPublisher.publishAll(events);

    return CommandResult.success(allTodoTask);
  }
}
