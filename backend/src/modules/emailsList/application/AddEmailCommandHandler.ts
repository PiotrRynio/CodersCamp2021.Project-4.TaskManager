import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import { CommandHandler } from '../../../shared/Module/core/application/command/CommandHandler';
import { DomainEventPublisher } from '../../../shared/Module/core/application/event/DomainEventBus';
import { CurrentTimeProvider } from '../../../shared/Module/core/CurrentTimeProvider';
import { AddEmailCommand } from './AddEmailCommand';
import { EntityIdGenerator } from '../../../shared/Module/core/application/EntityIdGenerator';
import { EmailListRepository } from './EmailListRepository';
import { registerNewRecord } from '../domain/EmailsList';
import { EmailAddress } from '../domain/valueObjects/EmailAddress';
import { UserEmailId } from '../domain/valueObjects/UserEmailId';

export class AddEmailCommandHandler implements CommandHandler<AddEmailCommand> {
  constructor(
    private readonly eventPublisher: DomainEventPublisher,
    private readonly currentTimeProvider: CurrentTimeProvider,
    private readonly repository: EmailListRepository,
    private readonly entityIdGenerator: EntityIdGenerator,
  ) {}

  async execute(command: AddEmailCommand): Promise<CommandResult> {
    const { state, events } = registerNewRecord(
      this.currentTimeProvider(),
      new UserEmailId(this.entityIdGenerator.generate()),
      { userEmail: new EmailAddress(command.userEmail) },
    );

    await this.repository.save(state);
    const allRegistrations = await this.repository.findAll();
    this.eventPublisher.publishAll(events);
    return CommandResult.success(allRegistrations);
  }
}
