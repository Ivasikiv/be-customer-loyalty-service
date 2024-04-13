import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PromoCampaignEntity {
  @Field()
  PromoCampaignID: number;

  @Field()
  PromoCampaignName: string;

  @Field()
  Description: string;

  @Field()
  StartDate: Date;

  @Field()
  EndDate: Date;
}
