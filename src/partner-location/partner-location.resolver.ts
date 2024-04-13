import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PartnerLocationEntity } from './entity/partner-location.entity';
import { CreatePartnerLocationInput } from './dto/create-partner-location.input';
import { UpdatePartnerLocationInput } from './dto/update-partner-location.input';
import { PartnerLocationService } from './partner-location.service';

@Resolver(() => PartnerLocationEntity)
export class PartnerLocationResolver {
  constructor(private readonly service: PartnerLocationService) {}

  @Mutation(() => PartnerLocationEntity)
  async createPartnerLocation(
    @Args('data') data: CreatePartnerLocationInput,
  ): Promise<PartnerLocationEntity> {
    return this.service.create(data);
  }

  @Query(() => [PartnerLocationEntity])
  async partnerLocations(): Promise<PartnerLocationEntity[]> {
    return this.service.findAll();
  }

  @Query(() => PartnerLocationEntity)
  async partnerLocation(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PartnerLocationEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => PartnerLocationEntity)
  async updatePartnerLocation(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdatePartnerLocationInput,
  ): Promise<PartnerLocationEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => PartnerLocationEntity)
  async removePartnerLocation(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<PartnerLocationEntity> {
    return this.service.remove(id);
  }
}
