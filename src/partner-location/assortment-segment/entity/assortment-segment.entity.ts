import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AssortmentSegmentEntity {
  @Field(() => Int)
  AssortmentSegmentID: number;

  @Field(() => Int)
  PartnerLocationID: number;

  @Field()
  AssortmentSegmentType: string;

  @Field(() => Float)
  Price: number;

  @Field(() => Int)
  Points: number;
}
