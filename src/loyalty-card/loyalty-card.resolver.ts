import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoyaltyCardEntity } from './entity/loyalty-card.entity';
import { LoyaltyCardService } from './loyalty-card.service';
import { CreateLoyaltyCardInput } from './dto/create-loyalty-card.input';
import { UpdateLoyaltyCardInput } from './dto/update-loyalty-card.input';

@Resolver(() => LoyaltyCardEntity)
export class LoyaltyCardResolver {
  constructor(private readonly service: LoyaltyCardService) {}

  @Mutation(() => LoyaltyCardEntity)
  async createLoyaltyCard(
    @Args('data') data: CreateLoyaltyCardInput,
  ): Promise<LoyaltyCardEntity> {
    return this.service.create(data);
  }

  @Query(() => [LoyaltyCardEntity])
  async loyaltyCards(): Promise<LoyaltyCardEntity[]> {
    return this.service.findAll();
  }

  @Query(() => LoyaltyCardEntity)
  async loyaltyCard(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyCardEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => LoyaltyCardEntity)
  async updateLoyaltyCard(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateLoyaltyCardInput,
  ): Promise<LoyaltyCardEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => LoyaltyCardEntity)
  async removeLoyaltyCard(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyCardEntity> {
    return this.service.remove(id);
  }
}
