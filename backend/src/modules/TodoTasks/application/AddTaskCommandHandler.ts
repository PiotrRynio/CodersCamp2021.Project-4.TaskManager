import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { CommandPublisher } from 'shared/Module/core/application/command/CommandBus';
import { CurrentTimeProvider } from 'shared/Module/core/CurrentTimeProvider';
import { EntityIdGenerator } from 'shared/Module/core/application/EntityIdGenerator';
import { AddTaskCommand } from './AddTaskCommand';
import { addNewTask } from '../domain/Task';
import { UserId } from '../domain/valueObjects/UserId';
import { TaskId } from '../domain/valueObjects/TaskId';

export class AddTaskCommandHandler implements CommandHandler<AddTaskCommand> {
  constructor(
    private readonly commandPublisher: CommandPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async execute(command: AddTaskCommand): Promise<CommandResult> {
    const { state, events } = addNewTask({
      currentTime: this.currentTimeProvider(),
      command: {
        taskName: command.taskName,
        taskId: new TaskId(this.entityIdGenerator.generate()),
        userId: new UserId(command.userId),
      },
    });

    return CommandResult.success();
  }
}
