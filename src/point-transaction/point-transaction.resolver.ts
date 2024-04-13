import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PointTransactionEntity } from './entity/point-transaction.entity';
import { CreatePointTransactionInput } from './dto/create-point-transaction.input';
import { UpdatePointTransactionInput } from './dto/update-point-transaction.input';
import { PointTransactionService } from './point-transaction.service';

@Resolver(() => PointTransactionEntity)
export class PointTransactionResolver {
  constructor(private readonly service: PointTransactionService) {}

  @Mutation(() => PointTransactionEntity)
  async createPointTransaction(
    @Args('data') data: CreatePointTransactionInput,
  ): Promise<PointTransactionEntity> {
    return this.service.create(data);
  }

  @Query(() => [PointTransactionEntity])
  async pointTransactions(): Promise<PointTransactionEntity[]> {
    return this.service.findAll();
  }

  @Query(() => PointTransactionEntity)
  async pointTransaction(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PointTransactionEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => PointTransactionEntity)
  async updatePointTransaction(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePointTransactionInput,
  ): Promise<PointTransactionEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => PointTransactionEntity)
  async removePointTransaction(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PointTransactionEntity> {
    return this.service.remove(id);
  }
}
