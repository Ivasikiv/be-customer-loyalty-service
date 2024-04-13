import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoyaltyPointEntity } from './entity/loyalty-point.entity';
import { LoyaltyPointService } from './loyalty-point.service';
import { CreateLoyaltyPointInput } from './dto/create-loyalty-point.input';
import { UpdateLoyaltyPointInput } from './dto/update-loyalty-point.input';

@Resolver(() => LoyaltyPointEntity)
export class LoyaltyPointResolver {
  constructor(private readonly service: LoyaltyPointService) {}

  @Mutation(() => LoyaltyPointEntity)
  async createLoyaltyPoint(
    @Args('data') data: CreateLoyaltyPointInput,
  ): Promise<LoyaltyPointEntity> {
    return this.service.create(data);
  }

  @Query(() => [LoyaltyPointEntity])
  async loyaltyPoints(): Promise<LoyaltyPointEntity[]> {
    return this.service.findAll();
  }

  @Query(() => LoyaltyPointEntity)
  async loyaltyPoint(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyPointEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => LoyaltyPointEntity)
  async updateLoyaltyPoint(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateLoyaltyPointInput,
  ): Promise<LoyaltyPointEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => LoyaltyPointEntity)
  async removeLoyaltyPoint(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyPointEntity> {
    return this.service.remove(id);
  }
}
