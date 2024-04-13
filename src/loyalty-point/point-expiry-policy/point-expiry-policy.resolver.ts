import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PointExpiryPolicyEntity } from './entity/point-expiry-policy.entity';
import { PointExpiryPolicyService } from './point-expiry-policy.service';
import { CreatePointExpiryPolicyInput } from './dto/create-point-expiry-policy.input';
import { UpdatePointExpiryPolicyInput } from './dto/update-point-expiry-policy.input';

@Resolver(() => PointExpiryPolicyEntity)
export class PointExpiryPolicyResolver {
  constructor(private readonly service: PointExpiryPolicyService) {}

  @Mutation(() => PointExpiryPolicyEntity)
  async createPointExpiryPolicy(
    @Args('data') data: CreatePointExpiryPolicyInput,
  ): Promise<PointExpiryPolicyEntity> {
    return this.service.create(data);
  }

  @Query(() => [PointExpiryPolicyEntity])
  async pointExpiryPolicies(): Promise<PointExpiryPolicyEntity[]> {
    return this.service.findAll();
  }

  @Query(() => PointExpiryPolicyEntity)
  async pointExpiryPolicy(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PointExpiryPolicyEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => PointExpiryPolicyEntity)
  async updatePointExpiryPolicy(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePointExpiryPolicyInput,
  ): Promise<PointExpiryPolicyEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => PointExpiryPolicyEntity)
  async removePointExpiryPolicy(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PointExpiryPolicyEntity> {
    return this.service.remove(id);
  }
}
