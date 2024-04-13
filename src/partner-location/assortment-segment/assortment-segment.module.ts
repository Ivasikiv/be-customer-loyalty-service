import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssortmentSegmentResolver } from './assortment-segment.resolver';
import { AssortmentSegmentService } from './assortment-segment.service';

@Module({
  providers: [
    AssortmentSegmentResolver,
    AssortmentSegmentService,
    PrismaService,
  ],
})
export class AssortmentSegmentModule {}
