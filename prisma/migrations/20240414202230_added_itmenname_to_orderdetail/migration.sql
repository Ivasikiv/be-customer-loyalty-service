/*
  Warnings:

  - Added the required column `ItemName` to the `OrderDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "ItemName" VARCHAR(80) NOT NULL;
