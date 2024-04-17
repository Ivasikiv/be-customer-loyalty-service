-- DropForeignKey
ALTER TABLE "AssortmentSegment" DROP CONSTRAINT "AssortmentSegment_AssortmentSegmentID_fkey";

-- AddForeignKey
ALTER TABLE "AssortmentSegment" ADD CONSTRAINT "AssortmentSegment_PartnerLocationID_fkey" FOREIGN KEY ("PartnerLocationID") REFERENCES "PartnerLocation"("LocationID") ON DELETE NO ACTION ON UPDATE NO ACTION;
