import 'jest-extended';
import { DatabaseTestSupport } from '../../../test-support/module/shared/infrastructure/DatabaseTestSupport';
import { EntityIdGenerator } from '../../../shared/Module/core/application/EntityIdGenerator';
import { UuidEntityIdGenerator } from '../../../shared/Module/infrastructure/core/application/UuidEntityIdGenerator';
import { EmailsList } from '../domain/EmailsList';
import { EmailListRepository } from '../application/EmailListRepository';

export function EmailsListRepositoryTestCases(props: {
  name: string;
  repositoryFactory: () => EmailListRepository;
  databaseTestSupport: DatabaseTestSupport;
}): void {
  return describe(props.name, () => {
    const entityIdGenerator: EntityIdGenerator = new UuidEntityIdGenerator();
    let repository: EmailListRepository;

    beforeAll(async () => {
      await props.databaseTestSupport.openConnection();
      repository = props.repositoryFactory();
    });
    afterEach(async () => await props.databaseTestSupport.clearDatabase());
    afterAll(async () => await props.databaseTestSupport.closeConnection());

    test('findAll returns empty list when nothing was saved', async () => {
      await props.databaseTestSupport.clearDatabase();

      expect(await repository.findAll()).toBeEmpty();
    });

    test('findAll returns all saved registrations', async () => {
      const registrationId1 = entityIdGenerator.generate();
      const userEmail1 = 'testUserEmail@test.com';

      const registrationId2 = entityIdGenerator.generate();
      const userEmail2 = 'testUserEmail2@test.com';

      const registration1 = new EmailsList({
        userEmailId: registrationId1,
        userEmail: userEmail1,
      });

      const registration2 = new EmailsList({
        userEmailId: registrationId2,
        userEmail: userEmail2,
      });

      await repository.save(registration1);
      await repository.save(registration2);

      expect(await repository.findAll()).toStrictEqual([registration1, registration2]);
    });
  });
}
