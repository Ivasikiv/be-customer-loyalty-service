import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateLoyaltyCardInput {
  @Field(() => Int)
  LoyaltyUserID: number;

  @Field(() => Int)
  LoyaltyCardTypeID: number;

  @Field(() => Int, { defaultValue: 0 })
  CurrentBalance?: number;

  @Field()
  CardNumber: string;

  @Field(() => Date, { nullable: true })
  FirstUsage?: Date | string;

  @Field(() => Date, { nullable: true })
  LastUsage?: Date | string;

  @Field({ defaultValue: 'Active' })
  Status?: string;
}
