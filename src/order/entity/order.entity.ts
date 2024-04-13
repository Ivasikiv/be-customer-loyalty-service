import { Field, ObjectType } from '@nestjs/graphql';
// import { Feedback } from './feedback.entity';
// import { OrderDetail } from './order-detail.entity';
// import { PartnerLocation } from './partner-location.entity';
// import { LoyaltyCard } from './loyalty-card.entity';
// import { OrderType } from './order-type.entity';
// import { Employee } from './employee.entity';
// import { PointTransaction } from './point-transaction.entity';

@ObjectType()
export class OrderRecordEntity {
  @Field()
  OrderID: number;

  @Field()
  LoyaltyCardID: number;

  @Field()
  LocationID: number;

  @Field()
  OrderTypeID: number;

  @Field()
  SellerID: number;

  @Field({ nullable: true })
  PaymentMethod?: string;

  @Field()
  OrderDateTime: Date;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => Feedback, { nullable: true })
  //   Feedback?: Feedback;

  //   @Field(() => [OrderDetail])
  //   OrderDetail: OrderDetail[];

  //   @Field(() => PartnerLocation)
  //   PartnerLocation: PartnerLocation;

  //   @Field(() => LoyaltyCard)
  //   LoyaltyCard: LoyaltyCard;

  //   @Field(() => OrderType)
  //   OrderType: OrderType;

  //   @Field(() => Employee)
  //   Employee: Employee;

  //   @Field(() => [PointTransaction])
  //   PointTransaction: PointTransaction[];
}
