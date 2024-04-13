import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PromoCampaignEntity } from './entity/promo-campaign.entity';
import { CreatePromoCampaignInput } from './dto/create-promo-campaign.input';
import { UpdatePromoCampaignInput } from './dto/update-promo-campaign.input';
import { PromoCampaignService } from './promo-campaign.service';

@Resolver(() => PromoCampaignEntity)
export class PromoCampaignResolver {
  constructor(private readonly service: PromoCampaignService) {}

  @Mutation(() => PromoCampaignEntity)
  async createPromoCampaign(
    @Args('data') data: CreatePromoCampaignInput,
  ): Promise<PromoCampaignEntity> {
    return this.service.create(data);
  }

  @Query(() => [PromoCampaignEntity])
  async promoCampaigns(): Promise<PromoCampaignEntity[]> {
    return this.service.findAll();
  }

  @Query(() => PromoCampaignEntity)
  async promoCampaign(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PromoCampaignEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => PromoCampaignEntity)
  async updatePromoCampaign(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePromoCampaignInput,
  ): Promise<PromoCampaignEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => PromoCampaignEntity)
  async removePromoCampaign(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PromoCampaignEntity> {
    return this.service.remove(id);
  }
}
