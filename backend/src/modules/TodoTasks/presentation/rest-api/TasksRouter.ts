import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CommandPublisher } from '../../../../shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from '../../../../shared/Module/core/application/event/DomainEventBus';
import { QueryPublisher } from '../../../../shared/Module/core/application/query/QueryBus';
import { PostCreateTaskRequestBody } from './request/PostCreateTaskRequestBody';
import { AddTaskCommand } from '../../application/AddTaskCommand';
import { Task } from '../../domain/Task';
import { TaskResponseDto } from './response/TaskResponseDto';
import { GetAllUserTasksRequestBody } from './request/GetAllUserTasksRequestBody';
import { FindAllTasksQuery, FindAllTasksQueryResult } from '../../application/FindAllTasksQuery';
import { LOCAL_PATH } from '../../constants';

export function taskRouter(
  commandPublisher: CommandPublisher,
  eventPublisher: DomainEventPublisher,
  queryPublisher: QueryPublisher,
): express.Router {
  const createTask = async (request: Request, response: Response) => {
    const requestBody: PostCreateTaskRequestBody = request.body;

    const { taskName, userId, isDone, isImportant } = requestBody;

    const commandResult = await commandPublisher.execute(
      new AddTaskCommand({
        taskName,
        userId,
        isDone,
        isImportant,
      }),
    );

    return commandResult.process(
      (state: Task[]) => {
        const responseBody = {
          taskList: state.map(
            ({ taskName, userId }): TaskResponseDto => ({
              taskName,
              userId,
              isDone,
              isImportant,
            }),
          ),
        };
        return response.status(StatusCodes.CREATED).json(responseBody);
      },
      (failureReason) => response.status(StatusCodes.BAD_REQUEST).json({ message: failureReason.message }),
    );
  };

  const getAllUserTasks = async (request: Request, response: Response) => {
    const requestBody: GetAllUserTasksRequestBody = request.body;

    const queryResult = await queryPublisher.execute<FindAllTasksQueryResult>(new FindAllTasksQuery());

    return response.status(StatusCodes.OK).json({ taskList: queryResult.map(toTasks) });
  };

  const router = express.Router();
  router.get(LOCAL_PATH, getAllUserTasks);
  router.post(LOCAL_PATH, createTask);

  return router;
}

const toTasks = ({ userId, taskName, isDone, isImportant }: Task): TaskResponseDto =>
  new TaskResponseDto({
    userId,
    taskName,
    isDone,
    isImportant,
  });
