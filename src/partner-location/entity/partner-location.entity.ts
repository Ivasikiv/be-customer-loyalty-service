import { Field, Int, ObjectType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Type, Transform } from 'class-transformer';

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

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  Latitude?: Decimal;

  @Field(() => GraphQLDecimal, { nullable: true })
  @Type(() => Object)
  @Transform(transformToDecimal)
  Longitude?: Decimal;
}
