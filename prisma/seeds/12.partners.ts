import { PartnerUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/partner/partner-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readPartnerData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/partners.json',
  );
  return data;
}

export const partner: {
  modelName: string;
  data: Promise<PartnerUncheckedCreateInput[]>;
} = {
  modelName: 'partner',
  data: readPartnerData(),
};
