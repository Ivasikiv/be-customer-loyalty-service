import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Partner } from './partner.entity';
// import { AssortmentSegment } from './assortment-segment.entity';
// import { Employee } from './employee.entity';
// import { Feedback } from './feedback.entity';
// import { OrderRecord } from './order-record.entity';

@ObjectType()
export class PartnerLocationEntity {
  @Field(() => Int)
  LocationID: number;

  @Field(() => Int)
  PartnerID: number;

  @Field()
  LocationName: string;

  @Field({ nullable: true })
  Address?: string;

  @Field({ nullable: true })
  City?: string;

  @Field({ nullable: true })
  State?: string;

  @Field({ nullable: true })
  ZipCode?: string;

  @Field({ nullable: true })
  Country?: string;

  @Field({ nullable: true })
  Latitude?: number;

  @Field({ nullable: true })
  Longitude?: number;

  @Field({ nullable: true })
  ContactPerson?: string;

  @Field({ nullable: true })
  ContactEmail?: string;

  @Field({ nullable: true })
  ContactPhone?: string;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => [AssortmentSegment])
  //   AssortmentSegment: AssortmentSegment[];

  //   @Field(() => [Employee])
  //   Employee: Employee[];

  //   @Field(() => [Feedback])
  //   Feedback: Feedback[];

  //   @Field(() => [OrderRecord])
  //   OrderRecord: OrderRecord[];

  //   @Field(() => Partner)
  //   Partner: Partner;
}
