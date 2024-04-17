import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDetailResolver } from './order-detail.resolver';
import { OrderDetailService } from './order-detail.service';

@Module({
  providers: [OrderDetailResolver, OrderDetailService, PrismaService],
})
export class OrderDetailModule {}
