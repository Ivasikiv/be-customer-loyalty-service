import { PromoCampaignUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/promo-campaign/promo-campaign-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readPromoCampaignData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/promo-campaigns.json',
  );
  return data;
}

export const promoCampaign: {
  modelName: string;
  data: Promise<PromoCampaignUncheckedCreateInput[]>;
} = {
  modelName: 'promoCampaign',
  data: readPromoCampaignData(),
};
