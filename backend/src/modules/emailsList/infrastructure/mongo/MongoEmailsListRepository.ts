import mongoose, { Schema } from 'mongoose';
import { EmailListRepository } from '../../application/EmailListRepository';
import { EmailsList } from '../../domain/EmailsList';

export class MongoEmailsListRepository implements EmailListRepository {
  async save(userEmail: EmailsList): Promise<void> {
    await MongoRegistration.findOneAndUpdate(
      { _id: userEmail.userEmailId },
      {
        _id: userEmail.userEmailId,
        userEmail: userEmail.userEmail,
      },
      { useFindAndModify: false, upsert: true },
    );
  }

  async findAll(): Promise<EmailsList[]> {
    const mongoFindResult = await MongoRegistration.find();
    return mongoFindResult.map((mongoDocument) => mongoDocumentToDomain(mongoDocument));
  }
}

type MongoRegistration = {
  readonly _id: string;
  readonly userEmail: string;
} & mongoose.Document;

const RegistrationSchema = new mongoose.Schema({
  _id: Schema.Types.String,
  userEmail: Schema.Types.String,
});

const MongoRegistration = mongoose.model<MongoRegistration>('RegistrationSchema', RegistrationSchema);

function mongoDocumentToDomain(mongoDocument: MongoRegistration): EmailsList {
  return new EmailsList({
    userEmailId: mongoDocument._id,
    userEmail: mongoDocument.userEmail,
  });
}
