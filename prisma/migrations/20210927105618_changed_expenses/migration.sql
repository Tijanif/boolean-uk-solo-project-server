/*
  Warnings:

  - You are about to drop the column `userId` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the `_ExpensesToHouseHold` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HouseHold` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HouseHoldToIncome` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_HouseHoldToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assignTo` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ExpensesToHouseHold" DROP CONSTRAINT "_ExpensesToHouseHold_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExpensesToHouseHold" DROP CONSTRAINT "_ExpensesToHouseHold_B_fkey";

-- DropForeignKey
ALTER TABLE "HouseHold" DROP CONSTRAINT "HouseHold_expensesId_fkey";

-- DropForeignKey
ALTER TABLE "HouseHold" DROP CONSTRAINT "HouseHold_incomeId_fkey";

-- DropForeignKey
ALTER TABLE "HouseHold" DROP CONSTRAINT "HouseHold_userId_fkey";

-- DropForeignKey
ALTER TABLE "_HouseHoldToIncome" DROP CONSTRAINT "_HouseHoldToIncome_A_fkey";

-- DropForeignKey
ALTER TABLE "_HouseHoldToIncome" DROP CONSTRAINT "_HouseHoldToIncome_B_fkey";

-- DropForeignKey
ALTER TABLE "_HouseHoldToUser" DROP CONSTRAINT "_HouseHoldToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_HouseHoldToUser" DROP CONSTRAINT "_HouseHoldToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_userId_fkey";

-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "userId",
ADD COLUMN     "assignTo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "userId",
ADD COLUMN     "amount" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ExpensesToHouseHold";

-- DropTable
DROP TABLE "HouseHold";

-- DropTable
DROP TABLE "_HouseHoldToIncome";

-- DropTable
DROP TABLE "_HouseHoldToUser";

-- DropEnum
DROP TYPE "TypesofDivision";

-- CreateTable
CREATE TABLE "Division" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Division_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
