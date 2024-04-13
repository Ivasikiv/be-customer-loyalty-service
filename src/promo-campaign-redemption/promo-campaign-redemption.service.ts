import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PromoCampaignRedemptionEntity } from './entity/promo-campaign-redemption.entity';
import { CreatePromoCampaignRedemptionInput } from './dto/create-promo-campaign-redemption.input';
import { UpdatePromoCampaignRedemptionInput } from './dto/update-promo-campaign-redemption.input';

@Injectable()
export class PromoCampaignRedemptionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreatePromoCampaignRedemptionInput,
  ): Promise<PromoCampaignRedemptionEntity> {
    return this.prisma.promoCampaignRedemption.create({ data });
  }

  async findAll(): Promise<PromoCampaignRedemptionEntity[]> {
    return this.prisma.promoCampaignRedemption.findMany();
  }

  async findOne(id: number): Promise<PromoCampaignRedemptionEntity | null> {
    return this.prisma.promoCampaignRedemption.findUnique({
      where: { RedemptionID: id },
    });
  }

  async update(
    id: number,
    data: UpdatePromoCampaignRedemptionInput,
  ): Promise<PromoCampaignRedemptionEntity> {
    return this.prisma.promoCampaignRedemption.update({
      where: { RedemptionID: id },
      data,
    });
  }

  async remove(id: number): Promise<PromoCampaignRedemptionEntity> {
    return this.prisma.promoCampaignRedemption.delete({
      where: { RedemptionID: id },
    });
  }
}
