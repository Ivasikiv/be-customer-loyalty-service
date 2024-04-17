import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'node:path';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { LoyaltyUserModule } from './loyalty-user/loyalty-user.module';
import { LoyaltyCardTypeModule } from './loyalty-card/loyalty-card-type/loyalty-card-type.module';
import { LoyaltyCardModule } from './loyalty-card/loyalty-card.module';
import { FeedbackModule } from './feedback/feedback.module';
import { PromoCampaignModule } from './promo-campaign/promo-campaign.module';
import { OrderRecordModule } from './order/order.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      introspection: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PrismaModule,
    LoyaltyUserModule,
    LoyaltyCardTypeModule,
    LoyaltyCardModule,
    FeedbackModule,
    PromoCampaignModule,
    OrderRecordModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // TODO - don't forget to uncomment this
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
