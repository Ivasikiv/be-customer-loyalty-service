import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderRecordResolver } from './order.resolver';
import { OrderRecordService } from './order.service';

@Module({
  providers: [OrderRecordResolver, OrderRecordService, PrismaService],
})
export class OrderRecordModule {}
