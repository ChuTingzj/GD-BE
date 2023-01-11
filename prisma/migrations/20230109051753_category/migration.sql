-- CreateTable
CREATE TABLE `Category` (
    `cate_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cate_name` VARCHAR(191) NOT NULL,
    `background` VARCHAR(191) NOT NULL,
    `cate_pic` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_cate_name_key`(`cate_name`),
    UNIQUE INDEX `Category_background_key`(`background`),
    PRIMARY KEY (`cate_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
