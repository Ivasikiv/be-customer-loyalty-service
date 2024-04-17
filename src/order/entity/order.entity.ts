import { Field, ObjectType } from '@nestjs/graphql';
import { OrderDetailEntity } from '../order-detail/entity/order-detail.entity';

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

  @Field(() => [OrderDetailEntity], { nullable: true })
  OrderDetails?: OrderDetailEntity[];
}
