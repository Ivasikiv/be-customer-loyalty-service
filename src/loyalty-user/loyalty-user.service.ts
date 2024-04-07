import { Injectable } from '@nestjs/common';
import { CreateLoyaltyUserInput } from './dto/create-loyalty-user.input';
import { UpdateLoyaltyUserInput } from './dto/update-loyalty-user.input';
import { LoyaltyUser } from '@prisma/client';
import { LoyaltyUserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/loyalty-user/loyalty-user-update.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoyaltyUserService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll(): Promise<LoyaltyUser[]> {
    return await this.prismaService.loyaltyUser.findMany();
  }

  async findOne(LoyaltyUserID: number): Promise<LoyaltyUser | null> {
    return await this.prismaService.loyaltyUser.findUnique({
      where: { LoyaltyUserID },
    });
  }

  async update(
    LoyaltyUserID: number,
    updateUser: LoyaltyUserUpdateInput,
  ): Promise<LoyaltyUser> {
    return await this.prismaService.loyaltyUser.update({
      where: {
        LoyaltyUserID,
      },
      data: updateUser,
    });
  }

  async remove(LoyaltyUserID: number): Promise<LoyaltyUser> {
    return await this.prismaService.loyaltyUser.delete({
      where: { LoyaltyUserID },
    });
  }
}
