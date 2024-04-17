import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDetailEntity } from './entity/order-detail.entity';
import { CreateOrderDetailInput } from './dto/create-order-detail.input';
import { UpdateOrderDetailInput } from './dto/update-order-detail.input';

@Injectable()
export class OrderDetailService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderDetailInput): Promise<OrderDetailEntity> {
    return this.prisma.orderDetail.create({ data });
  }

  async createMany(
    data: CreateOrderDetailInput[],
  ): Promise<OrderDetailEntity[]> {
    await this.prisma.orderDetail.createMany({ data });

    const ids = data.map((item) => item.OrderID);

    return this.prisma.orderDetail.findMany({
      where: { OrderDetailID: { in: ids } },
    });
  }

  async findAll(): Promise<OrderDetailEntity[]> {
    return this.prisma.orderDetail.findMany();
  }

  async findOne(id: number): Promise<OrderDetailEntity | null> {
    return this.prisma.orderDetail.findUnique({ where: { OrderDetailID: id } });
  }

  async findByOrderID(orderID: number): Promise<OrderDetailEntity[]> {
    return this.prisma.orderDetail.findMany({ where: { OrderID: orderID } });
  }

  async update(
    id: number,
    data: UpdateOrderDetailInput,
  ): Promise<OrderDetailEntity> {
    return this.prisma.orderDetail.update({
      where: { OrderDetailID: id },
      data,
    });
  }

  async remove(id: number): Promise<OrderDetailEntity> {
    return this.prisma.orderDetail.delete({ where: { OrderDetailID: id } });
  }
}
