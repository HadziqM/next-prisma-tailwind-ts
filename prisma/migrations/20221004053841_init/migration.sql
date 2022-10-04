-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sub" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kapal" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,

    CONSTRAINT "Kapal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "shipName" TEXT NOT NULL,
    "fuel" INTEGER NOT NULL,
    "maxFuel" INTEGER NOT NULL,
    "stg" INTEGER NOT NULL,
    "stt" INTEGER NOT NULL,
    "srv" INTEGER NOT NULL,
    "rpm" INTEGER NOT NULL,
    "tempGas" INTEGER NOT NULL,
    "oilPress" INTEGER NOT NULL,
    "engineVb" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "gps" INTEGER NOT NULL,
    "distance" BIGINT NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Kapal_brand_key" ON "Kapal"("brand");

-- AddForeignKey
ALTER TABLE "Kapal" ADD CONSTRAINT "Kapal_ownerName_fkey" FOREIGN KEY ("ownerName") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_shipName_fkey" FOREIGN KEY ("shipName") REFERENCES "Kapal"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;
