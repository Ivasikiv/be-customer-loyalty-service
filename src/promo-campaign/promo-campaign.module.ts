import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PromoCampaignResolver } from './promo-campaign.resolver';
import { PromoCampaignService } from './promo-campaign.service';

@Module({
  providers: [PromoCampaignResolver, PromoCampaignService, PrismaService],
})
export class PromoCampaignModule {}
