import { OrderRecordUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readOrderRecordData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/order_records.json',
  );
  return data;
}

export const orderRecord: {
  modelName: string;
  data: Promise<OrderRecordUncheckedCreateInput[]>;
} = {
  modelName: 'orderRecord',
  data: readOrderRecordData(),
};
