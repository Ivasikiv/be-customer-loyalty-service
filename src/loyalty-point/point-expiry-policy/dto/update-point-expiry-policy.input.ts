import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { PointExpiryPolicyEntity } from '../entity/point-expiry-policy.entity';

@InputType()
export class UpdatePointExpiryPolicyInput extends PartialType(
  PointExpiryPolicyEntity,
) {
  @Field(() => Int, { nullable: true })
  @IsInt()
  ExpiryPeriod?: number;

  @Field({ nullable: true })
  @IsNotEmpty()
  ExpiryType?: string;
}
