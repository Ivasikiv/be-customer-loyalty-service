import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderRecordEntity } from './entity/order.entity';
import { CreateOrderRecordInput } from './dto/create-order.input';
import { UpdateOrderRecordInput } from './dto/update-order.input';
// import { OrderRecord } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record.model';
// import { OrderRecordCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record-create.input';

@Injectable()
export class OrderRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderRecordInput): Promise<OrderRecordEntity> {
    const { OrderDetails, ...rest } = data;
    const createdOrderRecord = await this.prisma.orderRecord.create({
      data: {
        ...rest,
        OrderDetail: {
          createMany: { data: OrderDetails },
        },
      },
      include: { OrderDetail: true },
    });

    return createdOrderRecord;
  }

  // async create(data: OrderRecordCreateInput): Promise<OrderRecord> {
  //   return this.prisma.orderRecord.create({
  //     data,
  //     include: { OrderDetail: true },
  //   });
  // }

  async findAll(): Promise<OrderRecordEntity[]> {
    return this.prisma.orderRecord.findMany({
      include: { OrderDetail: true },
    });
  }

  async findOne(id: number): Promise<OrderRecordEntity | null> {
    return this.prisma.orderRecord.findUnique({
      where: { OrderID: id },
      include: { OrderDetail: true },
    });
  }

  async getOrderRecordsFromDateRange(
    startDate: string,
    endDate: string,
  ): Promise<OrderRecordEntity[]> {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return this.prisma.orderRecord.findMany({
      where: {
        OrderDateTime: {
          gte: start,
          lte: end,
        },
      },
      include: { OrderDetail: true },
    });
  }

  //   async update(
  //     id: number,
  //     data: UpdateOrderRecordInput,
  //   ): Promise<OrderRecordEntity> {
  //     const { OrderDetails, ...rest } = data;
  //     await this.prisma.orderDetail.deleteMany({ where: { OrderID: id } });

  //     const updatedOrderRecord = await this.prisma.orderRecord.update({
  //       where: { OrderID: id },
  //       data: {
  //         ...rest,
  //         OrderDetails: {
  //           createMany: { data: OrderDetails },
  //         },
  //       },
  //       include: { OrderDetails: true },
  //     });

  //     return updatedOrderRecord;
  //   }
}
