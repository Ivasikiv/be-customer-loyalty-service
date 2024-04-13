import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { LoyaltyPoint } from './loyalty-point.entity';

@ObjectType()
export class PointExpiryPolicyEntity {
  @Field(() => Int)
  PolicyID: number;

  @Field(() => Int)
  ExpiryPeriod: number;

  @Field()
  ExpiryType: string;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => [LoyaltyPoint], { nullable: true })
  //   LoyaltyPoint?: LoyaltyPoint[];
}
