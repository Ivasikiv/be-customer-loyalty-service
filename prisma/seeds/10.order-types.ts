import { OrderTypeUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-type/order-type-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readOrderTypeData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/order-types.json',
  );
  return data;
}

export const orderType: {
  modelName: string;
  data: Promise<OrderTypeUncheckedCreateInput[]>;
} = {
  modelName: 'orderType',
  data: readOrderTypeData(),
};
