/*
  Warnings:

  - You are about to drop the `_followertouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `follower` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_followertouser` DROP FOREIGN KEY `_FollowerToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_followertouser` DROP FOREIGN KEY `_FollowerToUser_B_fkey`;

-- AlterTable
ALTER TABLE `article` ADD COLUMN `isExist` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `dislike_times` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `like_times` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `parent_id` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isExist` BOOLEAN NOT NULL DEFAULT true;

-- DropTable
DROP TABLE `_followertouser`;

-- DropTable
DROP TABLE `follower`;

-- CreateTable
CREATE TABLE `FollowerMap` (
    `id` VARCHAR(191) NOT NULL,
    `master_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FocuserMap` (
    `id` VARCHAR(191) NOT NULL,
    `follower_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FollowerMap` ADD CONSTRAINT `FollowerMap_master_id_fkey` FOREIGN KEY (`master_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FocuserMap` ADD CONSTRAINT `FocuserMap_follower_id_fkey` FOREIGN KEY (`follower_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
