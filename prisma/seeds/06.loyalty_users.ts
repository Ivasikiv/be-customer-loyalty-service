import { LoyaltyUserUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/loyalty-user/loyalty-user-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readLoyaltyUserData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/loyalty_users.json',
  );
  return data;
}

export const loyaltyUser: {
  modelName: string;
  data: Promise<LoyaltyUserUncheckedCreateInput[]>;
} = {
  modelName: 'loyaltyUser',
  data: readLoyaltyUserData(),
};
