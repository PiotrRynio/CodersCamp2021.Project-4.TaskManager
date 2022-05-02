import { CommandResult } from '../../../shared/Module/core/application/command/CommandResult';
import Failure = CommandResult.Failure;
import { testEmailsListModule } from './testEmailsListModule';
import { AddEmailCommand } from './AddEmailCommand';

describe('EmailList Command |', () => {
  const currentTime = new Date();

  const defaultRegisterCommand = {
    userEmail: 'adamNowak@test.com',
  };

  describe('All |,', () => {
    describe('when correct item is being saved,', () => {
      it('then email were added', async () => {
        //Given
        const emailsListModule = testEmailsListModule(currentTime);

        //When
        const registerCommand = new AddEmailCommand({ ...defaultRegisterCommand });
        const commandResult = await emailsListModule.executeCommand(registerCommand);

        //Then
        expect(commandResult.isSuccess()).toBeTruthy();
      });
    });
  });

  describe('Email |,', () => {
    describe('when registered item is being registered,', () => {
      it('if email is invalid, then throw error', async () => {
        //Given
        const emailsListModule = testEmailsListModule(currentTime);
        const userEmail = 'adam@nowak@com.pl';

        //When
        const registerCommand = new AddEmailCommand({ ...defaultRegisterCommand, userEmail });
        const commandResult = await emailsListModule.executeCommand(registerCommand);

        //Then
        expect(commandResult.isSuccess()).toBeFalsy();
        expect((commandResult as Failure).reason).toStrictEqual(new Error('Email is not correct.'));
      });
    });
  });
});
