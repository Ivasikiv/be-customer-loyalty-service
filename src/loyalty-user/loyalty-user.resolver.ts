import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LoyaltyUserService } from './loyalty-user.service';
import { LoyaltyUserEntity } from './entities/loyalty-user.entity';
import { UpdateLoyaltyUserInput } from './dto/update-loyalty-user.input';
import { CreateLoyaltyUserInput } from './dto/create-loyalty-user.input';

@Resolver(() => LoyaltyUserEntity)
export class LoyaltyUserResolver {
  constructor(private readonly usersService: LoyaltyUserService) {}
  // TODO - handle deleted users

  @Query(() => [LoyaltyUserEntity], { name: 'LoyaltyUsers' })
  findAll(): Promise<LoyaltyUserEntity[]> {
    return this.usersService.findAll();
  }

  @Query(() => LoyaltyUserEntity, { name: 'LoyaltyUser', nullable: true })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<LoyaltyUserEntity | null> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => LoyaltyUserEntity)
  createUser(
    @Args('createData') createData: CreateLoyaltyUserInput,
  ): Promise<LoyaltyUserEntity> {
    console.log(createData);
    return this.usersService.create(createData);
  }

  @Mutation(() => LoyaltyUserEntity)
  updateUser(
    @Args('id', {
      type: () => Int,
    })
    id: number,
    @Args('updateData') updateData: UpdateLoyaltyUserInput,
  ): Promise<LoyaltyUserEntity> {
    const user = this.usersService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    return this.usersService.update(id, updateData);
  }

  @Mutation(() => LoyaltyUserEntity)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
