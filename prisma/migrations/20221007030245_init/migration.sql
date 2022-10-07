/*
  Warnings:

  - You are about to drop the `Fuel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Press` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rpm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Temp` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vibrate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fuel` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oil` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rpm` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slantX` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slantY` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `srv` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stg` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stt` to the `Sense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temp` to the `Sense` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Fuel" DROP CONSTRAINT "Fuel_shipName_fkey";

-- DropForeignKey
ALTER TABLE "Press" DROP CONSTRAINT "Press_shipName_fkey";

-- DropForeignKey
ALTER TABLE "Rpm" DROP CONSTRAINT "Rpm_shipName_fkey";

-- DropForeignKey
ALTER TABLE "Temp" DROP CONSTRAINT "Temp_shipName_fkey";

-- DropForeignKey
ALTER TABLE "Vibrate" DROP CONSTRAINT "Vibrate_shipName_fkey";

-- AlterTable
ALTER TABLE "Kapal" ADD COLUMN     "maxFuel" INTEGER NOT NULL DEFAULT 3500,
ADD COLUMN     "maxOil" INTEGER NOT NULL DEFAULT 400,
ADD COLUMN     "maxRpm" INTEGER NOT NULL DEFAULT 5000,
ADD COLUMN     "maxSrv" INTEGER NOT NULL DEFAULT 500,
ADD COLUMN     "maxStg" INTEGER NOT NULL DEFAULT 2000,
ADD COLUMN     "maxStt" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "maxTemp" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "maxVib" INTEGER NOT NULL DEFAULT 1000;

-- AlterTable
ALTER TABLE "Sense" ADD COLUMN     "camera" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "flow" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "fuel" INTEGER NOT NULL,
ADD COLUMN     "gps" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "gsm" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "internet" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "level" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "oil" INTEGER NOT NULL,
ADD COLUMN     "oilSense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "rpm" INTEGER NOT NULL,
ADD COLUMN     "rpmSense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "satelit" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "slantSense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "slantX" INTEGER NOT NULL,
ADD COLUMN     "slantY" INTEGER NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL,
ADD COLUMN     "srv" INTEGER NOT NULL,
ADD COLUMN     "stg" INTEGER NOT NULL,
ADD COLUMN     "stt" INTEGER NOT NULL,
ADD COLUMN     "temp" INTEGER NOT NULL,
ADD COLUMN     "tempSense" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "vibSense" BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE "Fuel";

-- DropTable
DROP TABLE "Press";

-- DropTable
DROP TABLE "Rpm";

-- DropTable
DROP TABLE "Temp";

-- DropTable
DROP TABLE "Vibrate";
