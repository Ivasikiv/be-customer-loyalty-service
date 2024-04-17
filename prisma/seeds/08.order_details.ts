import { OrderDetailUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-detail/order-detail-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readOrderDetailData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/order_details.json',
  );
  return data;
}

export const orderDetail: {
  modelName: string;
  data: Promise<OrderDetailUncheckedCreateInput[]>;
} = {
  modelName: 'orderDetail',
  data: readOrderDetailData(),
};
