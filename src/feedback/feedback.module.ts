import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FeedbackResolver } from './feedback.resolver';
import { FeedbackService } from './feedback.service';

@Module({
  providers: [FeedbackResolver, FeedbackService, PrismaService],
})
export class FeedbackModule {}
