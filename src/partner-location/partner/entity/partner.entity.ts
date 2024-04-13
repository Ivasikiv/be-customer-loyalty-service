import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { PartnerLocation } from './partner-location.entity';

@ObjectType()
export class PartnerEntity {
  @Field(() => Int)
  PartnerID: number;

  @Field()
  Name: string;

  @Field()
  Description: string;

  @Field()
  ContactPerson: string;

  @Field({ nullable: true })
  ContactEmail?: string;

  @Field({ nullable: true })
  ContactPhone?: string;

  //   @Field()
  //   CreateDate: Date;

  //   @Field({ nullable: true })
  //   UpdateDate?: Date;

  //   @Field(() => [PartnerLocation])
  //   PartnerLocation: PartnerLocation[];
}
