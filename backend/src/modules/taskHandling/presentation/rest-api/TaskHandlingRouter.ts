import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CommandPublisher } from '../../../../shared/Module/core/application/command/CommandBus';
import { DomainEventPublisher } from '../../../../shared/Module/core/application/event/DomainEventBus';
import { QueryPublisher } from '../../../../shared/Module/core/application/query/QueryBus';

export function taskHandlingRouter(
  commandPublisher: CommandPublisher,
  eventPublisher: DomainEventPublisher,
  queryPublisher: QueryPublisher,
): express.Router {
  const router = express.Router();

  return router;
}
