import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PointTransactionEntity } from './entity/point-transaction.entity';
import { CreatePointTransactionInput } from './dto/create-point-transaction.input';
import { UpdatePointTransactionInput } from './dto/update-point-transaction.input';

@Injectable()
export class PointTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreatePointTransactionInput,
  ): Promise<PointTransactionEntity> {
    return this.prisma.pointTransaction.create({ data });
  }

  async findAll(): Promise<PointTransactionEntity[]> {
    return this.prisma.pointTransaction.findMany();
  }

  async findOne(id: number): Promise<PointTransactionEntity | null> {
    return this.prisma.pointTransaction.findUnique({
      where: { PointTransactionID: id },
    });
  }

  async update(
    id: number,
    data: UpdatePointTransactionInput,
  ): Promise<PointTransactionEntity> {
    return this.prisma.pointTransaction.update({
      where: { PointTransactionID: id },
      data,
    });
  }

  async remove(id: number): Promise<PointTransactionEntity> {
    return this.prisma.pointTransaction.delete({
      where: { PointTransactionID: id },
    });
  }
}
