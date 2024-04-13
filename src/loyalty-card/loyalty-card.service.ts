import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoyaltyCardEntity } from './entity/loyalty-card.entity';
import { CreateLoyaltyCardInput } from './dto/create-loyalty-card.input';
import { UpdateLoyaltyCardInput } from './dto/update-loyalty-card.input';

@Injectable()
export class LoyaltyCardService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLoyaltyCardInput): Promise<LoyaltyCardEntity> {
    return this.prisma.loyaltyCard.create({ data });
  }

  async findAll(): Promise<LoyaltyCardEntity[]> {
    return this.prisma.loyaltyCard.findMany();
  }

  async findOne(id: number): Promise<LoyaltyCardEntity | null> {
    return this.prisma.loyaltyCard.findUnique({ where: { LoyaltyCardID: id } });
  }

  async update(
    id: number,
    data: UpdateLoyaltyCardInput,
  ): Promise<LoyaltyCardEntity> {
    return this.prisma.loyaltyCard.update({
      where: { LoyaltyCardID: id },
      data,
    });
  }

  async remove(id: number): Promise<LoyaltyCardEntity> {
    return this.prisma.loyaltyCard.delete({ where: { LoyaltyCardID: id } });
  }
}
