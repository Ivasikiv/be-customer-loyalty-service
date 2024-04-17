import { AssortmentSegmentUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/assortment-segment/assortment-segment-unchecked-create.input';
import { JSONReader } from '../../db-data-sets/json-reader';

async function readASData() {
  const jsonReader = new JSONReader();
  const data = await jsonReader.readJSON(
    './db-data-sets/db-data/assortment_segments.json',
  );
  return data;
}

export const assortmentSegment: {
  modelName: string;
  data: Promise<AssortmentSegmentUncheckedCreateInput[]>;
} = {
  modelName: 'assortmentSegment',
  data: readASData(),
};
