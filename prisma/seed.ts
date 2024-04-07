// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const modelName = {
//   user: 'user',
// } as const;

// async function seed() {
//   console.log('Running seeds...');
//   console.time('Execution Time');

//   const seeds = [];

//   for (const model of seeds) {
//     await prisma[model.modelName].createMany({ data: model.data });

//     console.log(`Seeded: ${model.modelName}`);
//   }

//   console.timeEnd('Execution Time');
//   console.log('Seeds Finished!');
// }

// seed()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
