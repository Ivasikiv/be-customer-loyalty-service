import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PointTransactionResolver } from './point-transaction.resolver';
import { PointTransactionService } from './point-transaction.service';

@Module({
  providers: [PointTransactionResolver, PointTransactionService, PrismaService],
})
export class PointTransactionModule {}
