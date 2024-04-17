import { PointTransactionUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/point-transaction/point-transaction-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readPointTransactionData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/point_transactions.json',
  );
  return data;
}

export const pointTransaction: {
  modelName: string;
  data: Promise<PointTransactionUncheckedCreateInput[]>;
} = {
  modelName: 'pointTransaction',
  data: readPointTransactionData(),
};
