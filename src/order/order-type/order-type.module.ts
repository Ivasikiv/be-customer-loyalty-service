import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderTypeResolver } from './order-type.resolver';
import { OrderTypeService } from './order-type.service';

@Module({
  providers: [OrderTypeResolver, OrderTypeService, PrismaService],
})
export class OrderTypeModule {}
