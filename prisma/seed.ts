import { PrismaClient } from '@prisma/client';
import { assortmentSegment } from './seeds/01.assortment_segment';
import { employee } from './seeds/02.employee';
import { feedback } from './seeds/03.feedback';
import { loyaltyCard } from './seeds/04.loyalty_card';
import { loyaltyPoint } from './seeds/05.loyalty_points';
import { loyaltyUser } from './seeds/06.loyalty_users';
import { loyaltyCardType } from './seeds/07.loyalty-card-types';
import { orderDetail } from './seeds/08.order_details';
import { orderRecord } from './seeds/09.order_records';
import { orderType } from './seeds/10.order-types';
import { partnerLocation } from './seeds/11.partner_locations';
import { partner } from './seeds/12.partners';
import { pointTransaction } from './seeds/13.point_transactions';
import { pointExpiryPolicy } from './seeds/14.point-expiry-policy';
import { promoCampaign } from './seeds/15.promo-campaigns';

const prisma = new PrismaClient();

async function seed() {
  console.log('Running seeds...');
  console.time('Execution Time');
  await clearDatabase();

  const seeds = [
    loyaltyUser,
    loyaltyCardType,
    loyaltyCard,
    partner,
    partnerLocation,
    employee,
    assortmentSegment,
    orderType,
    pointExpiryPolicy,
    promoCampaign,
    orderRecord,
    orderDetail,
    feedback,
    pointTransaction,
    loyaltyPoint,
  ];

  for (const model of seeds) {
    const data = await model.data;
    for (const item of data) {
      await prisma[model.modelName].create({ data: item });
    }

    console.log(`Seeded: ${model.modelName}`);
  }

  console.timeEnd('Execution Time');
  console.log('Seeds Finished!');
}

async function clearDatabase() {
  console.log('Clearing database...');
  console.time('Clearing Time');

  await prisma.$executeRaw`TRUNCATE TABLE "LoyaltyUser" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "LoyaltyCardType" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "LoyaltyCard" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Partner" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "PartnerLocation" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Employee" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "AssortmentSegment" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "OrderType" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "PointExpiryPolicy" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "PromoCampaign" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "OrderDetail" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "OrderRecord" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "Feedback" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "PointTransaction" RESTART IDENTITY CASCADE;`;
  await prisma.$executeRaw`TRUNCATE TABLE "LoyaltyPoint" RESTART IDENTITY CASCADE;`;

  console.timeEnd('Clearing Time');
  console.log('Database cleared successfully!');
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
