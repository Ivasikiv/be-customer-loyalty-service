import { LoyaltyCardUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/loyalty-card/loyalty-card-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readLoyaltyCardData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/loyalty_cards.json',
  );
  return data;
}

export const loyaltyCard: {
  modelName: string;
  data: Promise<LoyaltyCardUncheckedCreateInput[]>;
} = {
  modelName: 'loyaltyCard',
  data: readLoyaltyCardData(),
};
