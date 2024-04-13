import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
// import { PartnerLocation } from './partner-location.entity';
// import { OrderDetail } from './order-detail.entity';

@ObjectType()
export class AssortmentSegmentEntity {
  @Field(() => Int)
  AssortmentSegmentID: number;

  @Field(() => Int)
  PartnerLocationID: number;

  @Field()
  AssortmentSegmentType: string;

  @Field(() => Float)
  Price: number;

  @Field(() => Int)
  Points: number;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => PartnerLocation)
  //   PartnerLocation: PartnerLocation;

  //   @Field(() => [OrderDetail])
  //   OrderDetail: OrderDetail[];
}
