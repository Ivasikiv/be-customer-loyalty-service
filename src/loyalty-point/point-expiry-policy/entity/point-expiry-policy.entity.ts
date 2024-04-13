import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PointExpiryPolicyEntity {
  @Field(() => Int)
  PolicyID: number;

  @Field(() => Int)
  ExpiryPeriod: number;

  @Field()
  ExpiryType: string;
}
