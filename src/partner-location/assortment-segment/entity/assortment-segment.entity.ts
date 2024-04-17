import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AssortmentSegmentEntity {
  @Field(() => Int)
  AssortmentSegmentID: number;

  @Field(() => Int)
  PartnerLocationID: number;

  @Field()
  AssortmentSegmentType: string;

  @Field(() => Int)
  Points: number;
}
