import { InMemoryTestSupport } from '../../../../test-support/module/shared/infrastructure/InMemoryTestSupport';
import { EmailsListRepositoryTestCases } from '../EmailsListRepositoryTestCases';
import { InMemoryEmailsListRepository } from './InMemoryEmailsListRepository';

describe('EmailsListRepository', () => {
  EmailsListRepositoryTestCases({
    name: 'InMemory Implementation',
    repositoryFactory: () => new InMemoryEmailsListRepository(),
    databaseTestSupport: InMemoryTestSupport,
  });
});
