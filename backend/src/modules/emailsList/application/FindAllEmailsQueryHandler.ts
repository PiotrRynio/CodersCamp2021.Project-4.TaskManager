import { QueryHandler } from '../../../shared/Module/core/application/query/QueryHandler';
import { EmailListRepository } from './EmailListRepository';
import { FindAllEmailsQuery, FindAllEmailsQueryResult } from './FindAllEmailsQuery';

export class FindAllEmailsQueryHandler implements QueryHandler<FindAllEmailsQuery, FindAllEmailsQueryResult> {
  constructor(private readonly repository: EmailListRepository) {}

  execute(query: FindAllEmailsQuery): Promise<FindAllEmailsQueryResult> {
    return this.repository.findAll();
  }
}
