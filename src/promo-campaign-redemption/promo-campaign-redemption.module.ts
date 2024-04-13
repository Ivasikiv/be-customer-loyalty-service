import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PromoCampaignRedemptionResolver } from './promo-campaign-redemption.resolver';
import { PromoCampaignRedemptionService } from './promo-campaign-redemption.service';

@Module({
  providers: [
    PromoCampaignRedemptionResolver,
    PromoCampaignRedemptionService,
    PrismaService,
  ],
})
export class PromoCampaignRedemptionModule {}
