/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropTable
DROP TABLE `Post`;

-- DropTable
DROP TABLE `User`;

-- DropTable
DROP TABLE `comment`;

-- CreateTable
CREATE TABLE `Hero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `secretIdentity` VARCHAR(191) NULL,
    `aligenment` ENUM('HERO', 'VILLAIN') NOT NULL,
    `hometownId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
