-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "building" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image_uri" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
