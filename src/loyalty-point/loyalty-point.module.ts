import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoyaltyPointResolver } from './loyalty-point.resolver';
import { LoyaltyPointService } from './loyalty-point.service';

@Module({
  providers: [LoyaltyPointResolver, LoyaltyPointService, PrismaService],
})
export class LoyaltyPointModule {}
