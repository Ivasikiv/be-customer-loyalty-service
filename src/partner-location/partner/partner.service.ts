import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartnerEntity } from './entity/partner.entity';
import { CreatePartnerInput } from './dto/create-partner.input';
import { UpdatePartnerInput } from './dto/update-partner.input';

@Injectable()
export class PartnerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePartnerInput): Promise<PartnerEntity> {
    return this.prisma.partner.create({ data });
  }

  async findAll(): Promise<PartnerEntity[]> {
    return this.prisma.partner.findMany();
  }

  async findOne(id: number): Promise<PartnerEntity | null> {
    return this.prisma.partner.findUnique({ where: { PartnerID: id } });
  }

  async update(id: number, data: UpdatePartnerInput): Promise<PartnerEntity> {
    return this.prisma.partner.update({ where: { PartnerID: id }, data });
  }

  async remove(id: number): Promise<PartnerEntity> {
    return this.prisma.partner.delete({ where: { PartnerID: id } });
  }
}
