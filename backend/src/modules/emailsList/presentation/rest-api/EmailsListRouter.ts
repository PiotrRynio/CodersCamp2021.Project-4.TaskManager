import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CommandPublisher } from '../../../../shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from '../../../../shared/Module/core/application/event/DomainEventBus';
import { QueryPublisher } from '../../../../shared/Module/core/application/query/QueryBus';
import { EmailDto } from './response/EmailDto';
import { AddEmailCommand } from '../../application/AddEmailCommand';
import { EmailsList } from '../../domain/EmailsList';
import { PostCreateEmailRequestBody } from './request/PostCreateEmailRequestBody';
import { FindAllEmailsQuery, FindAllEmailsQueryResult } from '../../application/FindAllEmailsQuery';
import { GetAllEmailsListRequestBody } from './request/GetAllEmailsListRequestBody';

export function emailsListRouter(
  commandPublisher: CommandPublisher,
  eventPublisher: DomainEventPublisher,
  queryPublisher: QueryPublisher,
): express.Router {
  const createEmail = async (request: Request, response: Response) => {
    const requestBody: PostCreateEmailRequestBody = request.body;

    const { userEmail } = requestBody;

    const commandResult = await commandPublisher.execute(
      new AddEmailCommand({
        userEmail,
      }),
    );

    return commandResult.process(
      (state: EmailsList[]) => {
        const responseBody = {
          emailsList: state.map(
            ({ userEmailId, userEmail }): EmailDto => ({
              userEmailId: userEmailId,
              userEmail,
            }),
          ),
        };
        return response.status(StatusCodes.CREATED).json(responseBody);
      },
      (failureReason) => response.status(StatusCodes.BAD_REQUEST).json({ message: failureReason.message }),
    );
  };

  const getAllEmails = async (request: Request, response: Response) => {
    const requestBody: GetAllEmailsListRequestBody = request.body;

    const queryResult = await queryPublisher.execute<FindAllEmailsQueryResult>(new FindAllEmailsQuery());
    return response.status(StatusCodes.OK).json({ emailsList: queryResult.map(toEmailDto) });
  };

  const router = express.Router();
  router.get('', getAllEmails);
  router.post('', createEmail);
  return router;
}

const toEmailDto = ({ userEmailId, userEmail }: EmailsList): EmailDto =>
  new EmailDto({
    userEmailId,
    userEmail,
  });
