/*
  Warnings:

  - You are about to drop the column `maxFuel` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxOil` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxRpm` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxSrv` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxStg` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxStt` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxTemp` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `maxVib` on the `kapals` table. All the data in the column will be lost.
  - You are about to drop the column `oilSense` on the `senses` table. All the data in the column will be lost.
  - You are about to drop the column `rpmSense` on the `senses` table. All the data in the column will be lost.
  - You are about to drop the column `slantSense` on the `senses` table. All the data in the column will be lost.
  - You are about to drop the column `slantX` on the `senses` table. All the data in the column will be lost.
  - You are about to drop the column `slantY` on the `senses` table. All the data in the column will be lost.
  - You are about to drop the column `tempSense` on the `senses` table. All the data in the column will be lost.
  - You are about to drop the column `vibSense` on the `senses` table. All the data in the column will be lost.
  - Added the required column `slantx` to the `senses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slanty` to the `senses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "kapals" DROP COLUMN "maxFuel",
DROP COLUMN "maxOil",
DROP COLUMN "maxRpm",
DROP COLUMN "maxSrv",
DROP COLUMN "maxStg",
DROP COLUMN "maxStt",
DROP COLUMN "maxTemp",
DROP COLUMN "maxVib",
ADD COLUMN     "maxfuel" INTEGER NOT NULL DEFAULT 3500,
ADD COLUMN     "maxoil" INTEGER NOT NULL DEFAULT 400,
ADD COLUMN     "maxrpm" INTEGER NOT NULL DEFAULT 5000,
ADD COLUMN     "maxsrv" INTEGER NOT NULL DEFAULT 500,
ADD COLUMN     "maxstg" INTEGER NOT NULL DEFAULT 2000,
ADD COLUMN     "maxstt" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "maxtemp" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "maxvib" INTEGER NOT NULL DEFAULT 1000;

-- AlterTable
ALTER TABLE "senses" DROP COLUMN "oilSense",
DROP COLUMN "rpmSense",
DROP COLUMN "slantSense",
DROP COLUMN "slantX",
DROP COLUMN "slantY",
DROP COLUMN "tempSense",
DROP COLUMN "vibSense",
ADD COLUMN     "oilsense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "rpmsense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "slantsense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "slantx" INTEGER NOT NULL,
ADD COLUMN     "slanty" INTEGER NOT NULL,
ADD COLUMN     "tempsense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "vibsense" BOOLEAN NOT NULL DEFAULT true;
