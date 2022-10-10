/*
  Warnings:

  - You are about to drop the column `shipName` on the `senses` table. All the data in the column will be lost.
  - Added the required column `shipname` to the `senses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "senses" DROP CONSTRAINT "senses_shipName_fkey";

-- AlterTable
ALTER TABLE "senses" DROP COLUMN "shipName",
ADD COLUMN     "shipname" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "senses" ADD CONSTRAINT "senses_shipname_fkey" FOREIGN KEY ("shipname") REFERENCES "kapals"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;
