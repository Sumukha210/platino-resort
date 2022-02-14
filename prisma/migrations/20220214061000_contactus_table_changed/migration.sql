/*
  Warnings:

  - You are about to drop the `ContactUs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ContactUs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Contactus" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL DEFAULT ''
);
