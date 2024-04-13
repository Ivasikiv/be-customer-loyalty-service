import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateOrderTypeInput {
  @Field()
  @IsString()
  TypeName: string;

  @Field()
  @IsString()
  Description: string;
}
