import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PointExpiryPolicyEntity } from './entity/point-expiry-policy.entity';
import { CreatePointExpiryPolicyInput } from './dto/create-point-expiry-policy.input';
import { UpdatePointExpiryPolicyInput } from './dto/update-point-expiry-policy.input';

@Injectable()
export class PointExpiryPolicyService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreatePointExpiryPolicyInput,
  ): Promise<PointExpiryPolicyEntity> {
    return this.prisma.pointExpiryPolicy.create({ data });
  }

  async findAll(): Promise<PointExpiryPolicyEntity[]> {
    return this.prisma.pointExpiryPolicy.findMany();
  }

  async findOne(id: number): Promise<PointExpiryPolicyEntity | null> {
    return this.prisma.pointExpiryPolicy.findUnique({
      where: { PolicyID: id },
    });
  }

  async update(
    id: number,
    data: UpdatePointExpiryPolicyInput,
  ): Promise<PointExpiryPolicyEntity> {
    return this.prisma.pointExpiryPolicy.update({
      where: { PolicyID: id },
      data,
    });
  }

  async remove(id: number): Promise<PointExpiryPolicyEntity> {
    return this.prisma.pointExpiryPolicy.delete({ where: { PolicyID: id } });
  }
}
