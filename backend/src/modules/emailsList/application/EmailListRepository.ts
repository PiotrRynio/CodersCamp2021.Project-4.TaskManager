import { EmailsList } from '../domain/EmailsList';

export interface EmailListRepository {
  save(registration: EmailsList): Promise<void>;

  findAll(): Promise<EmailsList[]>;
}
