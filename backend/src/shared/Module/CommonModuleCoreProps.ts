import { DomainEventPublisher } from './core/application/event/DomainEventBus';
import { CommandPublisher } from './core/application/command/CommandBus';
import { CurrentTimeProvider } from './core/CurrentTimeProvider';
import { EntityIdGenerator } from './core/application/EntityIdGenerator';

export interface CommonModuleCoreProps {
  eventPublisher: DomainEventPublisher;
  commandPublisher: CommandPublisher;
  currentTimeProvider: CurrentTimeProvider;
  entityIdGenerator: EntityIdGenerator;
}
