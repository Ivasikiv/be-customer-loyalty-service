import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderDetailEntity } from './entity/order-detail.entity';
import { CreateOrderDetailInput } from './dto/create-order-detail.input';
import { UpdateOrderDetailInput } from './dto/update-order-detail.input';
import { OrderDetailService } from './order-detail.service';

@Resolver(() => OrderDetailEntity)
export class OrderDetailResolver {
  constructor(private readonly service: OrderDetailService) {}

  @Mutation(() => OrderDetailEntity)
  async createOrderDetail(
    @Args('data') data: CreateOrderDetailInput,
  ): Promise<OrderDetailEntity> {
    return this.service.create(data);
  }

  @Mutation(() => [OrderDetailEntity])
  async createOrderDetails(
    @Args('data', { type: () => [CreateOrderDetailInput] })
    data: CreateOrderDetailInput[],
  ): Promise<OrderDetailEntity[]> {
    return this.service.createMany(data);
  }

  @Query(() => [OrderDetailEntity])
  async orderDetails(): Promise<OrderDetailEntity[]> {
    return this.service.findAll();
  }

  @Query(() => OrderDetailEntity)
  async orderDetail(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderDetailEntity> {
    return this.service.findOne(id);
  }

  @Query(() => [OrderDetailEntity])
  async orderDetailsByOrderID(
    @Args('orderID', { type: () => Int }) orderID: number,
  ): Promise<OrderDetailEntity[]> {
    return this.service.findByOrderID(orderID);
  }

  @Mutation(() => OrderDetailEntity)
  async updateOrderDetail(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateOrderDetailInput,
  ): Promise<OrderDetailEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => OrderDetailEntity)
  async removeOrderDetail(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderDetailEntity> {
    return this.service.remove(id);
  }
}
