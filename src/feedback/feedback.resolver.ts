import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FeedbackEntity } from './entity/feedback.entity';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';

@Resolver(() => FeedbackEntity)
export class FeedbackResolver {
  constructor(private readonly service: FeedbackService) {}

  @Mutation(() => FeedbackEntity)
  async createFeedback(
    @Args('data') data: CreateFeedbackInput,
  ): Promise<FeedbackEntity> {
    return this.service.create(data);
  }

  @Query(() => [FeedbackEntity])
  async feedbacks(): Promise<FeedbackEntity[]> {
    return this.service.findAll();
  }

  @Query(() => FeedbackEntity)
  async feedback(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<FeedbackEntity> {
    return this.service.findOne(id);
  }

  @Mutation(() => FeedbackEntity)
  async updateFeedback(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateFeedbackInput,
  ): Promise<FeedbackEntity> {
    return this.service.update(id, data);
  }

  @Mutation(() => FeedbackEntity)
  async removeFeedback(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<FeedbackEntity> {
    return this.service.remove(id);
  }
}
