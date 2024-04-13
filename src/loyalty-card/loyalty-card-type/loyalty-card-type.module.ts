import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LoyaltyCardTypeResolver } from './loyalty-card-type.resolver';
import { LoyaltyCardTypeService } from './loyalty-card-type.service';

@Module({
  imports: [PrismaModule],
  providers: [LoyaltyCardTypeResolver, LoyaltyCardTypeService],
})
export class LoyaltyCardTypeModule {}
