import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLoyaltyCardTypeInput } from './dto/create-loyalty-card-type.input';
import { UpdateLoyaltyCardTypeInput } from './dto/update-loyalty-card-type.input';
import { LoyaltyCardTypeEntity } from './entity/loyalty-card-type.entity';

@Injectable()
export class LoyaltyCardTypeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateLoyaltyCardTypeInput,
  ): Promise<LoyaltyCardTypeEntity> {
    return this.prisma.loyaltyCardType.create({ data });
  }

  async findAll(): Promise<LoyaltyCardTypeEntity[]> {
    return this.prisma.loyaltyCardType.findMany();
  }

  async findOne(id: number): Promise<LoyaltyCardTypeEntity | null> {
    return this.prisma.loyaltyCardType.findUnique({
      where: { LoyaltyCardTypeID: id },
    });
  }

  async update(
    id: number,
    data: UpdateLoyaltyCardTypeInput,
  ): Promise<LoyaltyCardTypeEntity> {
    return this.prisma.loyaltyCardType.update({
      where: { LoyaltyCardTypeID: id },
      data,
    });
  }

  async remove(id: number): Promise<LoyaltyCardTypeEntity> {
    return this.prisma.loyaltyCardType.delete({
      where: { LoyaltyCardTypeID: id },
    });
  }
}
