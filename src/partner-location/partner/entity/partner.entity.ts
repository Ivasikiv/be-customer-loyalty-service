import { Field, Int, ObjectType } from '@nestjs/graphql';

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
}
