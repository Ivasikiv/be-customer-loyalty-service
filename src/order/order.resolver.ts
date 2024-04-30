import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrderRecordEntity } from './entity/order.entity';
import { OrderRecordService } from './order.service';
import { CreateOrderRecordInput } from './dto/create-order.input';
import { CreateOrderDetailInput } from './order-detail/dto/create-order-detail.input';
import { UpdateOrderRecordInput } from './dto/update-order.input';
// import { OrderRecord } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record.model';
// import { OrderRecordCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record-create.input';

@Resolver(() => OrderRecordEntity)
export class OrderRecordResolver {
  constructor(private readonly service: OrderRecordService) {}

  @Mutation(() => OrderRecordEntity)
  async createOrderRecord(
    @Args('data') data: CreateOrderRecordInput,
  ): Promise<OrderRecordEntity> {
    return this.service.create(data);
  }

  @Mutation(() => String)
  async makeOrder(
    @Args('orderData') orderData: CreateOrderRecordInput,
    @Args('orderDetails', { type: () => [CreateOrderDetailInput] })
    orderDetails: CreateOrderDetailInput[],
    @Args('pointsWithdrawn', { nullable: true }) pointsWithdrawn?: number,
  ): Promise<string> {
    return this.service.makeOrder(orderData, orderDetails, pointsWithdrawn);
  }

  // @Mutation(() => OrderRecord)
  // async createOrderRecord(
  //   @Args('data') data: OrderRecordCreateInput,
  // ): Promise<OrderRecord> {
  //   return this.service.create(data);
  // }

  @Query(() => [OrderRecordEntity])
  async orderRecords(): Promise<OrderRecordEntity[]> {
    return this.service.findAll();
  }

  @Query(() => OrderRecordEntity)
  async orderRecord(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderRecordEntity> {
    return this.service.findOne(id);
  }

  @Query(() => [OrderRecordEntity])
  async getOrderRecordsFromDateRange(
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<OrderRecordEntity[]> {
    return this.service.getOrderRecordsFromDateRange(startDate, endDate);
  }

  //   @Mutation(() => OrderRecordEntity)
  //   async updateOrderRecord(
  //     @Args('id', { type: () => Int }) id: number,
  //     @Args('data') data: UpdateOrderRecordInput,
  //   ): Promise<OrderRecordEntity> {
  //     return this.service.update(id, data);
  //   }
}
