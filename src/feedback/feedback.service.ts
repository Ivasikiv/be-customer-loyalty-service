import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackEntity } from './entity/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFeedbackInput): Promise<FeedbackEntity> {
    return this.prisma.feedback.create({ data });
  }

  async findAll(): Promise<FeedbackEntity[]> {
    return this.prisma.feedback.findMany();
  }

  async findOne(id: number): Promise<FeedbackEntity | null> {
    return this.prisma.feedback.findUnique({ where: { FeedbackID: id } });
  }

  async update(id: number, data: UpdateFeedbackInput): Promise<FeedbackEntity> {
    return this.prisma.feedback.update({ where: { FeedbackID: id }, data });
  }

  async remove(id: number): Promise<FeedbackEntity> {
    return this.prisma.feedback.delete({ where: { FeedbackID: id } });
  }
}
