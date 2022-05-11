import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CommandPublisher } from '../../../../shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from '../../../../shared/Module/core/application/event/DomainEventBus';
import { QueryPublisher } from '../../../../shared/Module/core/application/query/QueryBus';
import { PostCreateTaskRequestBody } from './request/PostCreateTaskRequestBody';
import { AddTaskCommand } from '../../application/AddTaskCommand';
import { Task } from '../../domain/Task';

export function taskRouter(
  commandPublisher: CommandPublisher,
  eventPublisher: DomainEventPublisher,
  queryPublisher: QueryPublisher,
): express.Router {
  const createTask = async (request: Request, response: Response) => {
    const requestBody: PostCreateTaskRequestBody = request.body;

    const { taskName, userId } = requestBody;

    const commandResult = await commandPublisher.execute(
      new AddTaskCommand({
        taskName,
        userId,
      }),
    );

    /*    return commandResult.process((state: Task[]) => {
              const responseBody = {};

            }*/
  };
  const router = express.Router();

  return router;
}
