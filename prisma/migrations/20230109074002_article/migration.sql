/*
  Warnings:

  - You are about to drop the column `cate_id` on the `article` table. All the data in the column will be lost.
  - You are about to drop the column `comment_id` on the `article` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `article` DROP COLUMN `cate_id`,
    DROP COLUMN `comment_id`;
