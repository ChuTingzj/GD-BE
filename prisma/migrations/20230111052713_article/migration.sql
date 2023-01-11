/*
  Warnings:

  - Added the required column `article_content` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `article_content` VARCHAR(191) NOT NULL;
