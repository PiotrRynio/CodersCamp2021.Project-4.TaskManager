import { StatusCodes } from 'http-status-codes';
import { CommandPublisherMock } from '../../../../test-support/module/shared/core/CommandPublisherMock';
import { CommandResult } from '../../../../shared/Module/core/application/command/CommandResult';
import { testModuleRestApi } from '../../../../test-support/module/shared/presentation/rest-api/TestModuleRestApi';
import { QueryPublisherMock } from '../../../../test-support/module/shared/core/QueryPublisherMock';
import { EmailsList } from '../../domain/EmailsList';
import { EmailsListRestApiModule } from './EmailsListRestApiModule';
import { AddEmailCommand } from '../../application/AddEmailCommand';
import { FindAllEmailsQuery } from '../../application/FindAllEmailsQuery';
import { PostCreateEmailRequestBody } from './request/PostCreateEmailRequestBody';
import { FULL_EMAILS_LIST_MODULE_PATH } from '../../constants';

describe('Registration REST API', () => {
  const postCreateRegistrationRequestBody1: PostCreateEmailRequestBody = {
    userEmail: 'testUserEmail1@test.com',
  };

  const postCreateRegistrationRequestBody2: PostCreateEmailRequestBody = {
    userEmail: 'testUserEmail2@test.com',
  };

  const testRegistration1: EmailsList = {
    userEmailId: 'testId1',
    userEmail: 'testUserEmail1@test.com',
  };

  const testRegistration2: EmailsList = {
    userEmailId: 'testId2',
    userEmail: 'testUserEmail2@test.com',
  };

  const incorrectPostCreateRegistrationRequestBody: PostCreateEmailRequestBody = {
    userEmail: 'testUser@Email2@com',
  };

  it('POST /rest-api/emails-list | when command success', async () => {
    //Given
    const commandPublisher = CommandPublisherMock(CommandResult.success([testRegistration1]));
    const { agent } = testModuleRestApi(EmailsListRestApiModule, { commandPublisher });

    //When
    const { body, status } = await agent
      .post(FULL_EMAILS_LIST_MODULE_PATH)
      .send(postCreateRegistrationRequestBody1);

    //Then
    expect(commandPublisher.executeCalls).toBeCalledWith(
      new AddEmailCommand(fromRequestBody(postCreateRegistrationRequestBody1)),
    );
    expect(status).toBe(StatusCodes.CREATED);
    expect(body).toStrictEqual({
      emailsList: [{ ...postCreateRegistrationRequestBody1, userEmailId: 'testId1' }],
    });
  });

  it('POST /rest-api/emails-list | when command failure', async () => {
    //Given
    const commandPublisher = CommandPublisherMock(
      CommandResult.failureDueTo(new Error('Email is not correct!')),
    );
    const { agent } = testModuleRestApi(EmailsListRestApiModule, { commandPublisher });

    //When
    const { body, status } = await agent
      .post(FULL_EMAILS_LIST_MODULE_PATH)
      .send(incorrectPostCreateRegistrationRequestBody);

    //Then
    expect(commandPublisher.executeCalls).toBeCalledWith(
      new AddEmailCommand(fromRequestBody(incorrectPostCreateRegistrationRequestBody)),
    );
    expect(status).toBe(StatusCodes.BAD_REQUEST);
    expect(body).toStrictEqual({ message: 'Email is not correct!' });
  });

  it('GET /rest-api/emails-list', async () => {
    //Given
    const queryPublisher = QueryPublisherMock([
      new EmailsList(testRegistration1),
      new EmailsList(testRegistration2),
    ]);
    const { agent } = testModuleRestApi(EmailsListRestApiModule, { queryPublisher });

    //When
    const { body, status } = await agent.get('/rest-api/emails-list').send();

    //Then
    expect(queryPublisher.executeCalls).toBeCalledWith(new FindAllEmailsQuery());
    expect(status).toBe(StatusCodes.OK);
    expect(body).toStrictEqual({
      emailsList: [
        { ...postCreateRegistrationRequestBody1, userEmailId: 'testId1' },
        { ...postCreateRegistrationRequestBody2, userEmailId: 'testId2' },
      ],
    });
  });
});

const fromRequestBody = ({ userEmail }: PostCreateEmailRequestBody): EmailsList =>
  new EmailsList({
    userEmailId: 'testId',
    userEmail,
  });
