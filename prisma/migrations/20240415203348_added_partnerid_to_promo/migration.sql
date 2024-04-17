/*
  Warnings:

  - Added the required column `PartnerID` to the `PromoCampaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PromoCampaign" ADD COLUMN     "PartnerID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "PromoCampaign" ADD CONSTRAINT "PromoCampaign_PartnerID_fkey" FOREIGN KEY ("PartnerID") REFERENCES "Partner"("PartnerID") ON DELETE RESTRICT ON UPDATE CASCADE;
