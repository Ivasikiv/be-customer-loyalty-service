import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoyaltyUserService } from './loyalty-user.service';
import { LoyaltyUser } from 'src/@generated/prisma-nestjs-graphql/loyalty-user/loyalty-user.model';
import { LoyaltyUserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/loyalty-user/loyalty-user-update.input';

@Resolver(() => LoyaltyUser)
export class LoyaltyUserResolver {
  constructor(private readonly usersService: LoyaltyUserService) {}
  // TODO - handle deleted users

  @Query(() => [LoyaltyUser], { name: 'users' })
  findAll(): Promise<LoyaltyUser[]> {
    return this.usersService.findAll();
  }

  @Query(() => LoyaltyUser, { name: 'user', nullable: true })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyUser | null> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => LoyaltyUser)
  updateUser(
    @Args('id', {
      type: () => Int,
    })
    id: number,
    @Args('updateData') updateData: LoyaltyUserUpdateInput,
  ): Promise<LoyaltyUser> {
    return this.usersService.update(id, updateData);
  }

  @Mutation(() => LoyaltyUser)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
