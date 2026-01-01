/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Bankaccount` DROP FOREIGN KEY `Bankaccount_phoneId_fkey`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `PhonepeAccount` (
    `account_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PhonepeAccount_phone_key`(`phone`),
    PRIMARY KEY (`account_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transection` (
    `transection` INTEGER NOT NULL AUTO_INCREMENT,
    `transectionAmount` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`transection`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bankaccount` ADD CONSTRAINT `Bankaccount_phoneId_fkey` FOREIGN KEY (`phoneId`) REFERENCES `PhonepeAccount`(`account_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transection` ADD CONSTRAINT `Transection_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `PhonepeAccount`(`account_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
