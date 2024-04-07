import { Module } from '@nestjs/common';
import { LoyaltyUserService } from './loyalty-user.service';
import { LoyaltyUserResolver } from './loyalty-user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [LoyaltyUserResolver, LoyaltyUserService, PrismaService],
  exports: [LoyaltyUserService],
})
export class LoyaltyUserModule {}
