import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Type, Transform } from 'class-transformer';

@ObjectType()
export class LoyaltyCardTypeEntity {
  @Field(() => Int)
  LoyaltyCardTypeID: number;

  @Field(() => GraphQLDecimal, { nullable: false })
  @Type(() => Object)
  @Transform(transformToDecimal)
  DiscountPercentage!: Decimal;

  @Field()
  TypeName: string;

  @Field()
  Description: string;

  @Field()
  CreateDate: Date;

  @Field({ nullable: true })
  UpdateDate?: Date;
}
