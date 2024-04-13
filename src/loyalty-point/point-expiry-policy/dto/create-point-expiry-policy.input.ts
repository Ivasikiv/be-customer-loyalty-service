import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePointExpiryPolicyInput {
  @Field(() => Int)
  @IsInt()
  ExpiryPeriod: number;

  @Field()
  @IsNotEmpty()
  ExpiryType: string;
}
