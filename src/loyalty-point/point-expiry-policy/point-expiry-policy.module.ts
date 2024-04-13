import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PointExpiryPolicyResolver } from './point-expiry-policy.resolver';
import { PointExpiryPolicyService } from './point-expiry-policy.service';

@Module({
  providers: [
    PointExpiryPolicyResolver,
    PointExpiryPolicyService,
    PrismaService,
  ],
})
export class PointExpiryPolicyModule {}
