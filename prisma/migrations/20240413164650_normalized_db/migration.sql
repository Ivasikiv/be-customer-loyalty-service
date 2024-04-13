/*
  Warnings:

  - You are about to drop the column `ContactEmail` on the `PartnerLocation` table. All the data in the column will be lost.
  - You are about to drop the column `ContactPerson` on the `PartnerLocation` table. All the data in the column will be lost.
  - You are about to drop the column `ContactPhone` on the `PartnerLocation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LoyaltyPoint" ALTER COLUMN "WithdrawalDateTime" DROP DEFAULT;

-- AlterTable
ALTER TABLE "PartnerLocation" DROP COLUMN "ContactEmail",
DROP COLUMN "ContactPerson",
DROP COLUMN "ContactPhone";

-- AlterTable
ALTER TABLE "PointTransaction" ALTER COLUMN "OrderDate" DROP DEFAULT;
