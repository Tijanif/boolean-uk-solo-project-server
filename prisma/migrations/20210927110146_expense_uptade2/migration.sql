/*
  Warnings:

  - You are about to drop the column `amount` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Expenses` table. All the data in the column will be lost.
  - Added the required column `cost` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "amount",
DROP COLUMN "name",
ADD COLUMN     "cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
