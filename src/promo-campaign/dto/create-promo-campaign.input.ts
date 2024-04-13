import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';

@InputType()
export class CreatePromoCampaignInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  PromoCampaignName: string;

  @Field()
  @IsString()
  Description: string;

  @Field()
  StartDate: Date;

  @Field()
  @IsDate()
  EndDate: Date;
}
