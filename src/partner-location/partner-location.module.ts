import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartnerLocationResolver } from './partner-location.resolver';
import { PartnerLocationService } from './partner-location.service';

@Module({
  providers: [PartnerLocationResolver, PartnerLocationService, PrismaService],
})
export class PartnerLocationModule {}
