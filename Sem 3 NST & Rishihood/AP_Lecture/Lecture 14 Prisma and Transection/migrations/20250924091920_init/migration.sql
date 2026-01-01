/*
  Warnings:

  - You are about to drop the `_HeroPowers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Hero` DROP FOREIGN KEY `Hero_hometownId_fkey`;

-- DropForeignKey
ALTER TABLE `_HeroPowers` DROP FOREIGN KEY `_HeroPowers_A_fkey`;

-- DropForeignKey
ALTER TABLE `_HeroPowers` DROP FOREIGN KEY `_HeroPowers_B_fkey`;

-- DropIndex
DROP INDEX `Hero_hometownId_fkey` ON `Hero`;

-- DropTable
DROP TABLE `_HeroPowers`;
