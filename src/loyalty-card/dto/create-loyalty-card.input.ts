import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class LoyaltyCardCreateInput {
  @Field(() => Int)
  LoyaltyUserID: number;

  @Field(() => Int)
  LoyaltyCardTypeID: number;

  @Field()
  CardNumber: string;

  @Field({ nullable: true, defaultValue: 'Active' })
  Status?: string;
}
