import { TestModuleCore, testModuleCore } from '../../../test-support/module/shared/core/TestModuleCore';
import { EmailsListModuleCore } from '../EmailsListModuleCore';
import { InMemoryEmailsListRepository } from '../infrastructure/inmemory/InMemoryEmailsListRepository';
import { UuidEntityIdGenerator } from '../../../shared/Module/infrastructure/core/application/UuidEntityIdGenerator';

export function testEmailsListModule(currentTime: Date): TestModuleCore {
  const registrationRepository = new InMemoryEmailsListRepository();
  const entityIdGenerator = new UuidEntityIdGenerator();

  return testModuleCore((commandBus, eventBus, queryBus) =>
    EmailsListModuleCore(eventBus, commandBus, () => currentTime, entityIdGenerator, registrationRepository),
  );
}
