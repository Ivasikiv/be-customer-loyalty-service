import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderRecordEntity } from './entity/order.entity';
import { CreateOrderRecordInput } from './dto/create-order.input';
import { CreateOrderDetailInput } from './order-detail/dto/create-order-detail.input';
import { UpdateOrderRecordInput } from './dto/update-order.input';
import { AssortmentSegment } from 'src/@generated/prisma-nestjs-graphql/assortment-segment/assortment-segment.model';
import { Int } from '@nestjs/graphql';
// import { OrderRecord } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record.model';
// import { OrderRecordCreateInput } from 'src/@generated/prisma-nestjs-graphql/order-record/order-record-create.input';

@Injectable()
export class OrderRecordService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderRecordInput): Promise<OrderRecordEntity> {
    return this.prisma.orderRecord.create({
      data,
    });
  }

  async makeOrder(
    orderData: CreateOrderRecordInput,
    orderDetails: CreateOrderDetailInput[],
    pointsWithdrawn?: number,
  ): Promise<string> {
    const orderRecord = await this.create(orderData);
    for (const orderDetail of orderDetails) {
      await this.prisma.orderDetail.create({
        data: {
          ...orderDetail,
          OrderID: orderRecord.OrderID,
        },
      });
      if (pointsWithdrawn) {
        await this.prisma.pointTransaction.create({
          data: {
            LoyaltyCardID: orderData.LoyaltyCardID,
            OrderRecordID: orderRecord.OrderID,
            PointTransactionType: 'Withdrawn',
            PointsChange: pointsWithdrawn,
            OrderDate: orderData.OrderDateTime,
          },
        });
      }
      const res = await this.prisma
        .$executeRaw`SELECT insert_point_transaction(${orderRecord.OrderID}::int);`;
      return 'Order created successfully!';
    }
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
  /*
{
  "data": {
    "LocationID": 1,
    "LoyaltyCardID": 1,
    "OrderDateTime": "2015-01-03 18:20:08",
    "OrderTypeID": 1,
    "PaymentMethod": "Card",
    "SellerID": 1,
    "OrderDetails": [
      {
        "ItemName": "very tasty pizza",
        "Price": 12,
        "Quantity": 2,
        "AssortmentSegment": {
          "connect": {
            "AssortmentSegmentID": 1
          }
        },
        "PromoCampaign": {
          "connect": {
            "PromoCampaignID": 1
          }
        },
        "OrderRecord": {
          "connect": {
            "OrderID": 21351
          }
        }
      },
      {
        "ItemName": "another pizza",
        "Price": 10,
        "Quantity": 1,
        "AssortmentSegment": {
          "connect": {
            "AssortmentSegmentID": 1
          }
        },
        "PromoCampaign": {
          "connect": {
            "PromoCampaignID": null
          }
        },
        "OrderRecord": {
          "connect": {
            "OrderID": 21351
          }
        }
      }
    ]
  }
}
*/
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
