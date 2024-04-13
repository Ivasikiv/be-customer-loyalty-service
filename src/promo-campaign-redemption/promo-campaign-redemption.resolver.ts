import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PromoCampaignRedemptionEntity } from './entity/promo-campaign-redemption.entity';
import { CreatePromoCampaignRedemptionInput } from './dto/create-promo-campaign-redemption.input';
import { UpdatePromoCampaignRedemptionInput } from './dto/update-promo-campaign-redemption.input';
import { PromoCampaignRedemptionService } from './promo-campaign-redemption.service';

@Resolver(() => PromoCampaignRedemptionEntity)
export class PromoCampaignRedemptionResolver {
  constructor(private readonly service: PromoCampaignRedemptionService) {}

  @Mutation(() => PromoCampaignRedemptionEntity)
  async createPromoCampaignRedemption(
    @Args('data') data: CreatePromoCampaignRedemptionInput,
  ): Promise<PromoCampaignRedemptionEntity> {
    return this.service.create(data);
  }

  @Query(() => [PromoCampaignRedemptionEntity])
  async promoCampaignRedemptions(): Promise<PromoCampaignRedemptionEntity[]> {
    return this.service.findAll();
  }

  @Query(() => PromoCampaignRedemptionEntity)
  async promoCampaignRedemption(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PromoCampaignRedemptionEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => PromoCampaignRedemptionEntity)
  async updatePromoCampaignRedemption(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePromoCampaignRedemptionInput,
  ): Promise<PromoCampaignRedemptionEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => PromoCampaignRedemptionEntity)
  async removePromoCampaignRedemption(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PromoCampaignRedemptionEntity> {
    return this.service.remove(id);
  }
}
