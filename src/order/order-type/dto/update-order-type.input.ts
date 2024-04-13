import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';
import { OrderTypeEntity } from '../entity/order-type.entity';

@InputType()
export class UpdateOrderTypeInput extends PartialType(OrderTypeEntity) {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  TypeName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  Description?: string;
}
