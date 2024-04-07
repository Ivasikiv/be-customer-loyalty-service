import { CreateLoyaltyUserInput } from './create-loyalty-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLoyaltyUserInput extends PartialType(
  CreateLoyaltyUserInput,
) {
  @Field(() => Int)
  id: number;
}
