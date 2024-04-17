import { PartnerLocationUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/partner-location/partner-location-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readPartnerLocationData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/partner_locations.json',
  );
  return data;
}

export const partnerLocation: {
  modelName: string;
  data: Promise<PartnerLocationUncheckedCreateInput[]>;
} = {
  modelName: 'partnerLocation',
  data: readPartnerLocationData(),
};
