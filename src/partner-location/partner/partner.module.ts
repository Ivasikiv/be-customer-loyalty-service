import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartnerResolver } from './partner.resolver';
import { PartnerService } from './partner.service';

@Module({
  providers: [PartnerResolver, PartnerService, PrismaService],
})
export class PartnerModule {}
