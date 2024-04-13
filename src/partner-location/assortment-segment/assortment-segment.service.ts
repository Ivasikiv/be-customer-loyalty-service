import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssortmentSegmentEntity } from './entity/assortment-segment.entity';
import { CreateAssortmentSegmentInput } from './dto/create-assortment-segment.input';
import { UpdateAssortmentSegmentInput } from './dto/update-assortment-segment.input';

@Injectable()
export class AssortmentSegmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: CreateAssortmentSegmentInput,
  ): Promise<AssortmentSegmentEntity> {
    return this.prisma.assortmentSegment.create({ data });
  }

  async findAll(): Promise<AssortmentSegmentEntity[]> {
    return this.prisma.assortmentSegment.findMany();
  }

  async findOne(id: number): Promise<AssortmentSegmentEntity | null> {
    return this.prisma.assortmentSegment.findUnique({
      where: { AssortmentSegmentID: id },
    });
  }

  async update(
    id: number,
    data: UpdateAssortmentSegmentInput,
  ): Promise<AssortmentSegmentEntity> {
    return this.prisma.assortmentSegment.update({
      where: { AssortmentSegmentID: id },
      data,
    });
  }

  async remove(id: number): Promise<AssortmentSegmentEntity> {
    return this.prisma.assortmentSegment.delete({
      where: { AssortmentSegmentID: id },
    });
  }
}
