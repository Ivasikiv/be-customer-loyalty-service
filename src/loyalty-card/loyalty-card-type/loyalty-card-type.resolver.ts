import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoyaltyCardTypeEntity } from './entity/loyalty-card-type.entity';
import { LoyaltyCardTypeService } from './loyalty-card-type.service';
import { CreateLoyaltyCardTypeInput } from './dto/create-loyalty-card-type.input';
import { UpdateLoyaltyCardTypeInput } from './dto/update-loyalty-card-type.input';

@Resolver(() => LoyaltyCardTypeEntity)
export class LoyaltyCardTypeResolver {
  constructor(private readonly service: LoyaltyCardTypeService) {}

  @Mutation(() => LoyaltyCardTypeEntity)
  async createLoyaltyCardType(
    @Args('data') data: CreateLoyaltyCardTypeInput,
  ): Promise<LoyaltyCardTypeEntity> {
    return this.service.create(data);
  }

  @Query(() => [LoyaltyCardTypeEntity])
  async loyaltyCardTypes(): Promise<LoyaltyCardTypeEntity[]> {
    return this.service.findAll();
  }

  @Query(() => LoyaltyCardTypeEntity)
  async loyaltyCardType(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyCardTypeEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => LoyaltyCardTypeEntity)
  async updateLoyaltyCardType(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateLoyaltyCardTypeInput,
  ): Promise<LoyaltyCardTypeEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => LoyaltyCardTypeEntity)
  async removeLoyaltyCardType(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyCardTypeEntity> {
    return this.service.remove(id);
  }
}
