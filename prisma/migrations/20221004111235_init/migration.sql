/*
  Warnings:

  - You are about to drop the column `sub` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Sensor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Kapal" DROP CONSTRAINT "Kapal_ownerName_fkey";

-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_shipName_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sub";

-- DropTable
DROP TABLE "Sensor";

-- CreateTable
CREATE TABLE "Ship" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "Ship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fuel" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "fuel" INTEGER NOT NULL,
    "maxFuel" INTEGER NOT NULL,
    "stg" INTEGER NOT NULL,
    "stt" INTEGER NOT NULL,
    "srv" INTEGER NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fuel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rpm" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "rpm" INTEGER NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rpm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Temp" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "temp" INTEGER NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Temp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Press" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "press" INTEGER NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Press_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vibrate" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "vib" INTEGER NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vibrate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sense" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "vib" INTEGER NOT NULL,
    "gps_n" INTEGER NOT NULL,
    "gps_w" INTEGER NOT NULL,
    "distance" BIGINT NOT NULL,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_brand_fkey" FOREIGN KEY ("brand") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ship" ADD CONSTRAINT "Ship_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fuel" ADD CONSTRAINT "Fuel_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rpm" ADD CONSTRAINT "Rpm_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Temp" ADD CONSTRAINT "Temp_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Press" ADD CONSTRAINT "Press_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vibrate" ADD CONSTRAINT "Vibrate_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sense" ADD CONSTRAINT "Sense_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;
