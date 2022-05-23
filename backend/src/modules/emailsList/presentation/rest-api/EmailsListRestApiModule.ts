import { CommandPublisher } from '../../../../shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from '../../../../shared/Module/core/application/event/DomainEventBus';
import { QueryPublisher } from '../../../../shared/Module/core/application/query/QueryBus';
import { ModuleRestApi } from '../../../../shared/Module/presentation/rest-api/ModuleRestApi';
import { emailsListRouter } from './EmailsListRouter';
import { FULL_EMAILS_LIST_MODULE_PATH } from '../../constants';

export function EmailsListRestApiModule(
  commandPublisher: CommandPublisher,
  eventPublisher: DomainEventPublisher,
  queryPublisher: QueryPublisher,
): ModuleRestApi {
  return {
    router: emailsListRouter(commandPublisher, eventPublisher, queryPublisher),
    path: FULL_EMAILS_LIST_MODULE_PATH,
  };
}
