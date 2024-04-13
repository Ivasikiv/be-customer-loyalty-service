import { Injectable } from '@nestjs/common';
import { CreateLoyaltyUserInput } from './dto/create-loyalty-user.input';
import { UpdateLoyaltyUserInput } from './dto/update-loyalty-user.input';
import { LoyaltyUserEntity } from './entities/loyalty-user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LoyaltyUserService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll(): Promise<LoyaltyUserEntity[]> {
    return await this.prismaService.loyaltyUser.findMany();
  }

  async findOne(LoyaltyUserID: number): Promise<LoyaltyUserEntity | null> {
    return await this.prismaService.loyaltyUser.findUnique({
      where: { LoyaltyUserID },
    });
  }

  async create(createUser: CreateLoyaltyUserInput): Promise<LoyaltyUserEntity> {
    return await this.prismaService.loyaltyUser.create({
      data: createUser,
    });
  }

  async update(
    LoyaltyUserID: number,
    updateUser: UpdateLoyaltyUserInput,
  ): Promise<LoyaltyUserEntity> {
    const user = await this.prismaService.loyaltyUser.findUnique({
      where: { LoyaltyUserID },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return await this.prismaService.loyaltyUser.update({
      where: {
        LoyaltyUserID: LoyaltyUserID,
      },
      data: updateUser,
    });
  }

  async remove(LoyaltyUserID: number): Promise<LoyaltyUserEntity> {
    return await this.prismaService.loyaltyUser.delete({
      where: { LoyaltyUserID },
    });
  }
}
