-- CreateEnum
CREATE TYPE "TypesofDivision" AS ENUM ('BASDONINCOME', 'FYFTYFYFTY', 'GRABABAG');

-- CreateTable
CREATE TABLE "Income" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expenses" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HouseHold" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "incomeId" INTEGER NOT NULL,
    "expensesId" INTEGER NOT NULL,
    "divisionType" "TypesofDivision" NOT NULL,

    CONSTRAINT "HouseHold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_HouseHoldToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_HouseHoldToIncome" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ExpensesToHouseHold" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_HouseHoldToUser_AB_unique" ON "_HouseHoldToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_HouseHoldToUser_B_index" ON "_HouseHoldToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_HouseHoldToIncome_AB_unique" ON "_HouseHoldToIncome"("A", "B");

-- CreateIndex
CREATE INDEX "_HouseHoldToIncome_B_index" ON "_HouseHoldToIncome"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ExpensesToHouseHold_AB_unique" ON "_ExpensesToHouseHold"("A", "B");

-- CreateIndex
CREATE INDEX "_ExpensesToHouseHold_B_index" ON "_ExpensesToHouseHold"("B");

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseHold" ADD CONSTRAINT "HouseHold_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseHold" ADD CONSTRAINT "HouseHold_incomeId_fkey" FOREIGN KEY ("incomeId") REFERENCES "Income"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HouseHold" ADD CONSTRAINT "HouseHold_expensesId_fkey" FOREIGN KEY ("expensesId") REFERENCES "Expenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseHoldToUser" ADD FOREIGN KEY ("A") REFERENCES "HouseHold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseHoldToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseHoldToIncome" ADD FOREIGN KEY ("A") REFERENCES "HouseHold"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseHoldToIncome" ADD FOREIGN KEY ("B") REFERENCES "Income"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExpensesToHouseHold" ADD FOREIGN KEY ("A") REFERENCES "Expenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExpensesToHouseHold" ADD FOREIGN KEY ("B") REFERENCES "HouseHold"("id") ON DELETE CASCADE ON UPDATE CASCADE;
