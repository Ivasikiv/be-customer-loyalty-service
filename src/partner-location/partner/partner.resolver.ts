import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PartnerEntity } from './entity/partner.entity';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';
import { PartnerService } from './partner.service';

@Resolver(() => PartnerEntity)
export class PartnerResolver {
  constructor(private readonly service: PartnerService) {}

  @Mutation(() => PartnerEntity)
  async createPartner(
    @Args('data') data: CreatePartnerInput,
  ): Promise<PartnerEntity> {
    return this.service.create(data);
  }

  @Query(() => [PartnerEntity])
  async partners(): Promise<PartnerEntity[]> {
    return this.service.findAll();
  }

  @Query(() => PartnerEntity)
  async partner(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PartnerEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => PartnerEntity)
  async updatePartner(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePartnerInput,
  ): Promise<PartnerEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => PartnerEntity)
  async removePartner(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PartnerEntity> {
    return this.service.remove(id);
  }
}
