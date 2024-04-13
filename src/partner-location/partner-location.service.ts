import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartnerLocationEntity } from './entity/partner-location.entity';
import { CreatePartnerLocationInput } from './dto/create-partner-location.input';
import { UpdatePartnerLocationInput } from './dto/update-partner-location.input';

@Injectable()
export class PartnerLocationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreatePartnerLocationInput,
  ): Promise<PartnerLocationEntity> {
    return this.prisma.partnerLocation.create({ data });
  }

  async findAll(): Promise<PartnerLocationEntity[]> {
    return this.prisma.partnerLocation.findMany();
  }

  async findOne(id: number): Promise<PartnerLocationEntity | null> {
    return this.prisma.partnerLocation.findUnique({
      where: { LocationID: id },
    });
  }

  async update(
    id: number,
    data: UpdatePartnerLocationInput,
  ): Promise<PartnerLocationEntity> {
    return this.prisma.partnerLocation.update({
      where: { LocationID: id },
      data,
    });
  }

  async remove(id: number): Promise<PartnerLocationEntity> {
    return this.prisma.partnerLocation.delete({ where: { LocationID: id } });
  }
}
