import { MongoTestSupport } from '../../../../test-support/module/shared/infrastructure/MongooseTestSupport';
import { EmailsListRepositoryTestCases } from '../EmailsListRepositoryTestCases';
import { MongoEmailsListRepository } from './MongoEmailsListRepository';

describe('RegistrationsRepository', () => {
  EmailsListRepositoryTestCases({
    name: 'MongoDb Implementation',
    repositoryFactory: () => new MongoEmailsListRepository(),
    databaseTestSupport: MongoTestSupport,
  });
});
