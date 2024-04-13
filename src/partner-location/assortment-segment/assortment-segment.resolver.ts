import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AssortmentSegmentEntity } from './entity/assortment-segment.entity';
import { CreateAssortmentSegmentInput } from './dto/create-assortment-segment.input';
import { UpdateAssortmentSegmentInput } from './dto/update-assortment-segment.input';
import { AssortmentSegmentService } from './assortment-segment.service';

@Resolver(() => AssortmentSegmentEntity)
export class AssortmentSegmentResolver {
  constructor(private readonly service: AssortmentSegmentService) {}

  @Mutation(() => AssortmentSegmentEntity)
  async createAssortmentSegment(
    @Args('data') data: CreateAssortmentSegmentInput,
  ): Promise<AssortmentSegmentEntity> {
    return this.service.create(data);
  }

  @Query(() => [AssortmentSegmentEntity])
  async assortmentSegments(): Promise<AssortmentSegmentEntity[]> {
    return this.service.findAll();
  }

  @Query(() => AssortmentSegmentEntity)
  async assortmentSegment(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<AssortmentSegmentEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => AssortmentSegmentEntity)
  async updateAssortmentSegment(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateAssortmentSegmentInput,
  ): Promise<AssortmentSegmentEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => AssortmentSegmentEntity)
  async removeAssortmentSegment(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<AssortmentSegmentEntity> {
    return this.service.remove(id);
  }
}
