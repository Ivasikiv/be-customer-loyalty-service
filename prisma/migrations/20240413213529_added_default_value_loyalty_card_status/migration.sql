-- AlterTable
ALTER TABLE "LoyaltyCard" ALTER COLUMN "Status" DROP NOT NULL,
ALTER COLUMN "Status" SET DEFAULT 'Active';
