import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderTypeEntity } from './entity/order-type.entity';
import { CreateOrderTypeInput } from './dto/create-order-type.input';
import { UpdateOrderTypeInput } from './dto/update-order-type.input';

@Injectable()
export class OrderTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderTypeInput): Promise<OrderTypeEntity> {
    return this.prisma.orderType.create({ data });
  }

  async findAll(): Promise<OrderTypeEntity[]> {
    return this.prisma.orderType.findMany();
  }

  async findOne(id: number): Promise<OrderTypeEntity | null> {
    return this.prisma.orderType.findUnique({ where: { OrderTypeID: id } });
  }

  async update(
    id: number,
    data: UpdateOrderTypeInput,
  ): Promise<OrderTypeEntity> {
    return this.prisma.orderType.update({ where: { OrderTypeID: id }, data });
  }

  async remove(id: number): Promise<OrderTypeEntity> {
    return this.prisma.orderType.delete({ where: { OrderTypeID: id } });
  }
}
