/*
  Warnings:

  - You are about to drop the `Kapal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ship` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Sense" DROP CONSTRAINT "Sense_shipName_fkey";

-- DropForeignKey
ALTER TABLE "Ship" DROP CONSTRAINT "Ship_brand_fkey";

-- DropTable
DROP TABLE "Kapal";

-- DropTable
DROP TABLE "Sense";

-- DropTable
DROP TABLE "Ship";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ships" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "ships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kapals" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "maxFuel" INTEGER NOT NULL DEFAULT 3500,
    "maxStg" INTEGER NOT NULL DEFAULT 2000,
    "maxStt" INTEGER NOT NULL DEFAULT 1000,
    "maxSrv" INTEGER NOT NULL DEFAULT 500,
    "maxRpm" INTEGER NOT NULL DEFAULT 5000,
    "maxOil" INTEGER NOT NULL DEFAULT 400,
    "maxTemp" INTEGER NOT NULL DEFAULT 1000,
    "maxVib" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "kapals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "senses" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "gps_n" INTEGER NOT NULL,
    "gps_w" INTEGER NOT NULL,
    "distance" BIGINT NOT NULL,
    "fuel" INTEGER NOT NULL,
    "stg" INTEGER NOT NULL,
    "stt" INTEGER NOT NULL,
    "srv" INTEGER NOT NULL,
    "oil" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "rpm" INTEGER NOT NULL,
    "vib" INTEGER NOT NULL,
    "slantX" INTEGER NOT NULL,
    "slantY" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "gsm" BOOLEAN NOT NULL DEFAULT false,
    "internet" BOOLEAN NOT NULL DEFAULT true,
    "satelit" BOOLEAN NOT NULL DEFAULT false,
    "flow" BOOLEAN NOT NULL DEFAULT true,
    "level" BOOLEAN NOT NULL DEFAULT true,
    "rpmSense" BOOLEAN NOT NULL DEFAULT true,
    "vibSense" BOOLEAN NOT NULL DEFAULT true,
    "oilSense" BOOLEAN NOT NULL DEFAULT true,
    "tempSense" BOOLEAN NOT NULL DEFAULT true,
    "slantSense" BOOLEAN NOT NULL DEFAULT true,
    "gps" BOOLEAN NOT NULL DEFAULT true,
    "camera" BOOLEAN NOT NULL DEFAULT true,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "senses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "kapals_brand_key" ON "kapals"("brand");

-- AddForeignKey
ALTER TABLE "ships" ADD CONSTRAINT "ships_brand_fkey" FOREIGN KEY ("brand") REFERENCES "kapals"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "senses" ADD CONSTRAINT "senses_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "kapals"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;
