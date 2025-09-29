/*
  Warnings:

  - You are about to drop the column `aligenment` on the `Hero` table. All the data in the column will be lost.
  - Added the required column `alignment` to the `Hero` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Hero` DROP COLUMN `aligenment`,
    ADD COLUMN `alignment` ENUM('EVIL', 'VILLIAN') NOT NULL;

-- CreateTable
CREATE TABLE `Power` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Power_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `City` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `population` INTEGER NOT NULL,

    UNIQUE INDEX `City_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_HeroPowers` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_HeroPowers_AB_unique`(`A`, `B`),
    INDEX `_HeroPowers_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_hometownId_fkey` FOREIGN KEY (`hometownId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroPowers` ADD CONSTRAINT `_HeroPowers_A_fkey` FOREIGN KEY (`A`) REFERENCES `Hero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_HeroPowers` ADD CONSTRAINT `_HeroPowers_B_fkey` FOREIGN KEY (`B`) REFERENCES `Power`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
