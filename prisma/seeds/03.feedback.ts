import { FeedbackUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/feedback/feedback-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readFeedbackData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/feedbacks.json',
  );
  return data;
}

export const feedback: {
  modelName: string;
  data: Promise<FeedbackUncheckedCreateInput[]>;
} = {
  modelName: 'feedback',
  data: readFeedbackData(),
};
