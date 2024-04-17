import { LoyaltyPointUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/loyalty-point/loyalty-point-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readLoyaltyPointData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/loyalty_points.json',
  );
  return data;
}

export const loyaltyPoint: {
  modelName: string;
  data: Promise<LoyaltyPointUncheckedCreateInput[]>;
} = {
  modelName: 'loyaltyPoint',
  data: readLoyaltyPointData(),
};
