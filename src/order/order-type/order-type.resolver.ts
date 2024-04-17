import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderTypeEntity } from './entity/order-type.entity';
import { CreateOrderTypeInput } from './dto/create-order-type.input';
import { UpdateOrderTypeInput } from './dto/update-order-type.input';
import { OrderTypeService } from './order-type.service';

@Resolver(() => OrderTypeEntity)
export class OrderTypeResolver {
  constructor(private readonly service: OrderTypeService) {}

  @Mutation(() => OrderTypeEntity)
  async createOrderType(
    @Args('data') data: CreateOrderTypeInput,
  ): Promise<OrderTypeEntity> {
    return this.service.create(data);
  }

  @Query(() => [OrderTypeEntity])
  async orderTypes(): Promise<OrderTypeEntity[]> {
    return this.service.findAll();
  }

  @Query(() => OrderTypeEntity)
  async orderType(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderTypeEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => OrderTypeEntity)
  async updateOrderType(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateOrderTypeInput,
  ): Promise<OrderTypeEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => OrderTypeEntity)
  async removeOrderType(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderTypeEntity> {
    return this.service.remove(id);
  }
}
