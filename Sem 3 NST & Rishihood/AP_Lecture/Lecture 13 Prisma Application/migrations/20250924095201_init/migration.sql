-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `certificate_id` INTEGER NOT NULL,

    UNIQUE INDEX `Student_certificate_id_key`(`certificate_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Certificate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `student_id` INTEGER NOT NULL,

    UNIQUE INDEX `Certificate_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_certificate_id_fkey` FOREIGN KEY (`certificate_id`) REFERENCES `Certificate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
