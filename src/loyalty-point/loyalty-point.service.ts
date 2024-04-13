import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoyaltyPointEntity } from './entity/loyalty-point.entity';
import { CreateLoyaltyPointInput } from './dto/create-loyalty-point.input';
import { UpdateLoyaltyPointInput } from './dto/update-loyalty-point.input';

@Injectable()
export class LoyaltyPointService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateLoyaltyPointInput): Promise<LoyaltyPointEntity> {
    return this.prisma.loyaltyPoint.create({ data });
  }

  async findAll(): Promise<LoyaltyPointEntity[]> {
    return this.prisma.loyaltyPoint.findMany();
  }

  async findOne(id: number): Promise<LoyaltyPointEntity | null> {
    return this.prisma.loyaltyPoint.findUnique({
      where: { LoyaltyPointID: id },
    });
  }

  async update(
    id: number,
    data: UpdateLoyaltyPointInput,
  ): Promise<LoyaltyPointEntity> {
    return this.prisma.loyaltyPoint.update({
      where: { LoyaltyPointID: id },
      data,
    });
  }

  async remove(id: number): Promise<LoyaltyPointEntity> {
    return this.prisma.loyaltyPoint.delete({ where: { LoyaltyPointID: id } });
  }
}
