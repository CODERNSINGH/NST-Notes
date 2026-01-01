/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `account_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `account_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`account_id`);

-- CreateTable
CREATE TABLE `Bankaccount` (
    `accountNumber` INTEGER NOT NULL,
    `phoneId` INTEGER NOT NULL,

    UNIQUE INDEX `Bankaccount_accountNumber_key`(`accountNumber`),
    UNIQUE INDEX `Bankaccount_phoneId_key`(`phoneId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bankaccount` ADD CONSTRAINT `Bankaccount_phoneId_fkey` FOREIGN KEY (`phoneId`) REFERENCES `User`(`account_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
