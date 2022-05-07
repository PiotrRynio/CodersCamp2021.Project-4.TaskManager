import { EmailListRepository } from '../../application/EmailListRepository';
import { EmailsList } from '../../domain/EmailsList';

export class InMemoryEmailsListRepository implements EmailListRepository {
  private readonly entities: { [id: string]: EmailsList } = {};

  async save(userEmail: EmailsList): Promise<void> {
    this.entities[userEmail.userEmailId] = userEmail;
  }

  findAll(): Promise<EmailsList[]> {
    return Promise.resolve(Object.keys(this.entities).map((id) => this.entities[id]));
  }
}
