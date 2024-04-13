import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PromoCampaignEntity } from './entity/promo-campaign.entity';
import { CreatePromoCampaignInput } from './dto/create-promo-campaign.input';
import { UpdatePromoCampaignInput } from './dto/update-promo-campaign.input';

@Injectable()
export class PromoCampaignService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePromoCampaignInput): Promise<PromoCampaignEntity> {
    return this.prisma.promoCampaign.create({ data });
  }

  async findAll(): Promise<PromoCampaignEntity[]> {
    return this.prisma.promoCampaign.findMany();
  }

  async findOne(id: number): Promise<PromoCampaignEntity | null> {
    return this.prisma.promoCampaign.findUnique({
      where: { PromoCampaignID: id },
    });
  }

  async update(
    id: number,
    data: UpdatePromoCampaignInput,
  ): Promise<PromoCampaignEntity> {
    return this.prisma.promoCampaign.update({
      where: { PromoCampaignID: id },
      data,
    });
  }

  async remove(id: number): Promise<PromoCampaignEntity> {
    return this.prisma.promoCampaign.delete({ where: { PromoCampaignID: id } });
  }
}
