import { LoyaltyCardTypeUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/loyalty-card-type/loyalty-card-type-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readLoyaltyCardTypeData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/loyalty-card-types.json',
  );
  return data;
}

export const loyaltyCardType: {
  modelName: string;
  data: Promise<LoyaltyCardTypeUncheckedCreateInput[]>;
} = {
  modelName: 'loyaltyCardType',
  data: readLoyaltyCardTypeData(),
};
