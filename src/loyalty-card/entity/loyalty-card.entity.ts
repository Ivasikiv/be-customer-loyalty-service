import { Field, ObjectType, Int } from '@nestjs/graphql';
// import { LoyaltyCardType } from './loyalty-card-type.entity';
// import { LoyaltyUser } from './loyalty-user.entity';

@ObjectType()
export class LoyaltyCardEntity {
  @Field(() => Int)
  LoyaltyCardID: number;

  @Field(() => Int)
  LoyaltyUserID: number;

  @Field(() => Int)
  LoyaltyCardTypeID: number;

  @Field()
  CardNumber: string;

  @Field(() => Int)
  CurrentBalance: number;

  @Field({ nullable: true })
  FirstUsage?: Date;

  @Field({ nullable: true })
  LastUsage?: Date;

  @Field()
  Status: string;

  // @Field()
  // CreateDate: Date;

  // @Field({ nullable: true })
  // UpdateDate?: Date;

  // @Field(() => LoyaltyCardType)
  // LoyaltyCardType: LoyaltyCardType;

  // @Field(() => LoyaltyUser)
  // LoyaltyUser: LoyaltyUser;
}
