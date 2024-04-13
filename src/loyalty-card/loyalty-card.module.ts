import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoyaltyCardResolver } from './loyalty-card.resolver';
import { LoyaltyCardService } from './loyalty-card.service';

@Module({
  providers: [LoyaltyCardResolver, LoyaltyCardService, PrismaService],
})
export class LoyaltyCardModule {}
