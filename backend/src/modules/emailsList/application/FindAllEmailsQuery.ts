import { EmailsList } from '../domain/EmailsList';

export class FindAllEmailsQuery {
  constructor() {}
}

export type FindAllEmailsQueryResult = EmailsList[];
