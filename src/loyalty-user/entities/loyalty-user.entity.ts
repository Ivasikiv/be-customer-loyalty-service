import { Field, Int, ObjectType } from '@nestjs/graphql';
//import { Prisma } from '@prisma/client';

@ObjectType()
export class LoyaltyUserEntity {
  @Field(() => Int)
  LoyaltyUserID: number;

  @Field()
  FirstName: string;

  @Field()
  LastName: string;

  @Field()
  Email: string;

  @Field({ nullable: true })
  Phone?: string;

  @Field({ nullable: true })
  Address?: string;

  @Field({ nullable: true })
  BirthDate?: Date;

  // @Field()
  // CreateDate: Date;

  // @Field({ nullable: true })
  // UpdateDate?: Date;

  // @Field(() => [Prisma.FeedbackUncheckedCreateInput], { nullable: true })
  // Feedback?: Prisma.FeedbackUncheckedCreateInput[];

  // @Field(() => [Prisma.LoyaltyCardUncheckedCreateInput], { nullable: true })
  // LoyaltyCard?: Prisma.LoyaltyCardUncheckedCreateInput[];

  // @Field(() => [Prisma.NotificationUncheckedCreateInput], { nullable: true })
  // Notification?: Prisma.NotificationUncheckedCreateInput[];
}
