/*
  Warnings:

  - You are about to drop the column `authToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `authorized` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `authorizedBy` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `authToken`,
    DROP COLUMN `authorized`,
    DROP COLUMN `authorizedBy`;

-- CreateTable
CREATE TABLE `Authorize` (
    `id` VARCHAR(191) NOT NULL,
    `authToken` VARCHAR(191) NOT NULL,
    `authorizedBy` ENUM('Github') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AuthorizeToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AuthorizeToUser_AB_unique`(`A`, `B`),
    INDEX `_AuthorizeToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AuthorizeToUser` ADD CONSTRAINT `_AuthorizeToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Authorize`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AuthorizeToUser` ADD CONSTRAINT `_AuthorizeToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
