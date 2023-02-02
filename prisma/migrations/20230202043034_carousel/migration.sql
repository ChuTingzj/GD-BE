-- AlterTable
ALTER TABLE `User` ADD COLUMN `account` VARCHAR(191) NULL,
    ADD COLUMN `authToken` VARCHAR(191) NULL,
    ADD COLUMN `authorized` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `authorizedBy` ENUM('Github') NULL,
    ADD COLUMN `password` VARCHAR(191) NULL;
