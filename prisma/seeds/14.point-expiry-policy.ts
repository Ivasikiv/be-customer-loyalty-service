import { PointExpiryPolicyUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/point-expiry-policy/point-expiry-policy-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readPointExpiryPolicyData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/point-expiry-policy.json',
  );
  return data;
}

export const pointExpiryPolicy: {
  modelName: string;
  data: Promise<PointExpiryPolicyUncheckedCreateInput[]>;
} = {
  modelName: 'pointExpiryPolicy',
  data: readPointExpiryPolicyData(),
};
