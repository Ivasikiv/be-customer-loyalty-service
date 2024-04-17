import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderTypeEntity {
  @Field()
  OrderTypeID: number;

  @Field()
  TypeName: string;

  @Field()
  Description: string;
}
