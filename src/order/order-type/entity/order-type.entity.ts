import { Field, ObjectType } from '@nestjs/graphql';
// import { OrderRecord } from './order-record.entity';

@ObjectType()
export class OrderTypeEntity {
  @Field()
  OrderTypeID: number;

  @Field()
  TypeName: string;

  @Field()
  Description: string;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => [OrderRecord])
  //   OrderRecord: OrderRecord[];
}
