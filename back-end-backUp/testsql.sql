/*
 Navicat Premium Data Transfer

 Source Server         : sam
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : testsql

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 28/09/2020 17:20:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for nk_admins
-- ----------------------------
DROP TABLE IF EXISTS `nk_admins`;
CREATE TABLE `nk_admins`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `passwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `authority` int NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_admins
-- ----------------------------
INSERT INTO `nk_admins` VALUES (1, 'admin', '123456', '18364477711', '81111@qq.com', '2020-07-08 00:00:00', 0, 'https://tvax4.sinaimg.cn/crop.0.0.379.379.180/007jermFly8gc8p1lhj1gj30aj0ajq3t.jpg?KID=imgbed,tva&Expires=1594180975&ssig=dXHSa3SrfK');

-- ----------------------------
-- Table structure for nk_attribute_color
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_color`;
CREATE TABLE `nk_attribute_color`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_color
-- ----------------------------
INSERT INTO `nk_attribute_color` VALUES (1, '白色', '#ffffff', '2020-09-12 09:55:50', '2020-09-16 07:33:47');
INSERT INTO `nk_attribute_color` VALUES (6, '黑色', '#111111', '2020-09-16 09:34:41', '2020-09-18 09:22:05');
INSERT INTO `nk_attribute_color` VALUES (7, '红色', '#E7352B', '2020-09-17 02:48:43', '2020-09-28 02:24:46');
INSERT INTO `nk_attribute_color` VALUES (8, '蓝色', '#1790C8', '2020-09-17 02:49:29', '2020-09-28 02:24:08');
INSERT INTO `nk_attribute_color` VALUES (9, '黄色', '#FED533', '2020-09-17 02:49:50', '2020-09-28 02:25:14');
INSERT INTO `nk_attribute_color` VALUES (10, '绿色', '#7BBA3C', '2020-09-17 02:50:26', '2020-09-28 02:25:28');
INSERT INTO `nk_attribute_color` VALUES (11, '紫色', '#8D429F', '2020-09-28 02:23:32', '2020-09-28 02:23:32');
INSERT INTO `nk_attribute_color` VALUES (12, '棕色', '#825D41', '2020-09-28 02:24:25', '2020-09-28 02:24:25');
INSERT INTO `nk_attribute_color` VALUES (13, '橙色', '#F36B26', '2020-09-28 02:25:04', '2020-09-28 02:25:04');
INSERT INTO `nk_attribute_color` VALUES (14, '灰色', '#808080', '2020-09-28 02:25:46', '2020-09-28 02:25:46');
INSERT INTO `nk_attribute_color` VALUES (15, '粉色', '#F0728F', '2020-09-28 02:26:06', '2020-09-28 02:26:06');

-- ----------------------------
-- Table structure for nk_attribute_length
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_length`;
CREATE TABLE `nk_attribute_length`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_length
-- ----------------------------
INSERT INTO `nk_attribute_length` VALUES (1, '全长', '2020-09-28 09:07:00', '2020-09-28 09:07:00');
INSERT INTO `nk_attribute_length` VALUES (2, '及膝设计', '2020-09-28 09:07:11', '2020-09-28 09:07:20');

-- ----------------------------
-- Table structure for nk_attribute_material
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_material`;
CREATE TABLE `nk_attribute_material`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `sports_type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_material
-- ----------------------------
INSERT INTO `nk_attribute_material` VALUES (1, '针织', 0, NULL, '2020-09-28 06:58:33', '2020-09-28 06:58:33');
INSERT INTO `nk_attribute_material` VALUES (2, '帆布', 1, NULL, '2020-09-28 07:01:04', '2020-09-28 07:01:04');
INSERT INTO `nk_attribute_material` VALUES (3, '皮革', 1, NULL, '2020-09-28 07:01:09', '2020-09-28 07:01:09');
INSERT INTO `nk_attribute_material` VALUES (4, '合成材料', 1, NULL, '2020-09-28 07:01:14', '2020-09-28 07:01:14');

-- ----------------------------
-- Table structure for nk_attribute_shoes_ground_type
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_shoes_ground_type`;
CREATE TABLE `nk_attribute_shoes_ground_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sports_type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_shoes_ground_type
-- ----------------------------
INSERT INTO `nk_attribute_shoes_ground_type` VALUES (1, '室内', NULL, '2020-09-28 09:19:40', '2020-09-28 09:19:51');
INSERT INTO `nk_attribute_shoes_ground_type` VALUES (2, '室外', NULL, '2020-09-28 09:19:46', '2020-09-28 09:19:46');

-- ----------------------------
-- Table structure for nk_attribute_shoes_height
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_shoes_height`;
CREATE TABLE `nk_attribute_shoes_height`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `sports_type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_shoes_height
-- ----------------------------
INSERT INTO `nk_attribute_shoes_height` VALUES (1, '低帮', NULL, '2020-09-28 09:19:11', '2020-09-28 09:19:11');
INSERT INTO `nk_attribute_shoes_height` VALUES (2, '中帮', NULL, '2020-09-28 09:19:23', '2020-09-28 09:19:23');
INSERT INTO `nk_attribute_shoes_height` VALUES (3, '高帮', NULL, '2020-09-28 09:19:27', '2020-09-28 09:19:27');

-- ----------------------------
-- Table structure for nk_attribute_size
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_size`;
CREATE TABLE `nk_attribute_size`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_size
-- ----------------------------
INSERT INTO `nk_attribute_size` VALUES (17, '35.5', 1, '2020-09-28 06:18:32', '2020-09-28 06:18:32');
INSERT INTO `nk_attribute_size` VALUES (18, '36', 1, '2020-09-28 06:18:37', '2020-09-28 06:18:37');
INSERT INTO `nk_attribute_size` VALUES (19, '36.5', 1, '2020-09-28 06:18:43', '2020-09-28 06:18:43');
INSERT INTO `nk_attribute_size` VALUES (20, '37', 1, '2020-09-28 06:18:48', '2020-09-28 06:18:48');
INSERT INTO `nk_attribute_size` VALUES (21, '37.5', 1, '2020-09-28 06:18:54', '2020-09-28 06:18:54');
INSERT INTO `nk_attribute_size` VALUES (22, '38', 1, '2020-09-28 06:20:29', '2020-09-28 06:20:29');
INSERT INTO `nk_attribute_size` VALUES (23, '38.5', 1, '2020-09-28 06:20:35', '2020-09-28 06:20:35');
INSERT INTO `nk_attribute_size` VALUES (24, '39', 1, '2020-09-28 06:20:39', '2020-09-28 06:20:39');
INSERT INTO `nk_attribute_size` VALUES (25, '39.5', 1, '2020-09-28 06:20:43', '2020-09-28 06:20:43');
INSERT INTO `nk_attribute_size` VALUES (26, '40', 1, '2020-09-28 06:20:47', '2020-09-28 06:20:47');
INSERT INTO `nk_attribute_size` VALUES (27, '40.5', 1, '2020-09-28 06:20:52', '2020-09-28 06:20:52');
INSERT INTO `nk_attribute_size` VALUES (28, '41', 1, '2020-09-28 06:20:56', '2020-09-28 06:20:56');
INSERT INTO `nk_attribute_size` VALUES (29, '41.5', 1, '2020-09-28 06:21:00', '2020-09-28 06:21:00');
INSERT INTO `nk_attribute_size` VALUES (30, '42', 1, '2020-09-28 06:21:04', '2020-09-28 06:21:04');
INSERT INTO `nk_attribute_size` VALUES (31, '42.5', 1, '2020-09-28 06:21:10', '2020-09-28 06:21:10');
INSERT INTO `nk_attribute_size` VALUES (32, '43', 1, '2020-09-28 06:21:14', '2020-09-28 06:21:14');
INSERT INTO `nk_attribute_size` VALUES (33, '43.5', 1, '2020-09-28 06:21:19', '2020-09-28 06:21:19');
INSERT INTO `nk_attribute_size` VALUES (34, '44', 1, '2020-09-28 06:21:23', '2020-09-28 06:21:23');
INSERT INTO `nk_attribute_size` VALUES (35, '44.5', 1, '2020-09-28 06:21:28', '2020-09-28 06:21:28');
INSERT INTO `nk_attribute_size` VALUES (36, '45', 1, '2020-09-28 06:21:32', '2020-09-28 06:21:32');
INSERT INTO `nk_attribute_size` VALUES (37, '45.5', 1, '2020-09-28 06:21:35', '2020-09-28 06:21:35');
INSERT INTO `nk_attribute_size` VALUES (38, '46', 1, '2020-09-28 06:21:38', '2020-09-28 06:21:38');
INSERT INTO `nk_attribute_size` VALUES (39, '46.5', 1, '2020-09-28 06:21:42', '2020-09-28 06:21:42');
INSERT INTO `nk_attribute_size` VALUES (40, '47', 1, '2020-09-28 06:21:45', '2020-09-28 06:21:45');
INSERT INTO `nk_attribute_size` VALUES (41, '47.5', 1, '2020-09-28 06:21:50', '2020-09-28 06:21:50');
INSERT INTO `nk_attribute_size` VALUES (42, '48', 1, '2020-09-28 06:21:53', '2020-09-28 06:21:53');
INSERT INTO `nk_attribute_size` VALUES (45, 'XS', 0, '2020-09-28 06:56:03', '2020-09-28 06:56:03');
INSERT INTO `nk_attribute_size` VALUES (46, 'S', 0, '2020-09-28 06:56:13', '2020-09-28 06:56:13');
INSERT INTO `nk_attribute_size` VALUES (47, 'M', 0, '2020-09-28 06:56:18', '2020-09-28 06:56:18');
INSERT INTO `nk_attribute_size` VALUES (48, 'L', 0, '2020-09-28 06:56:21', '2020-09-28 06:56:21');
INSERT INTO `nk_attribute_size` VALUES (49, 'XL', 0, '2020-09-28 06:56:25', '2020-09-28 06:56:25');
INSERT INTO `nk_attribute_size` VALUES (50, 'XXL', 0, '2020-09-28 06:56:32', '2020-09-28 06:56:32');
INSERT INTO `nk_attribute_size` VALUES (51, 'XXXL', 0, '2020-09-28 06:56:35', '2020-09-28 06:56:35');
INSERT INTO `nk_attribute_size` VALUES (52, 'XXXXL', 0, '2020-09-28 06:56:40', '2020-09-28 06:56:40');

-- ----------------------------
-- Table structure for nk_attribute_special
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_special`;
CREATE TABLE `nk_attribute_special`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `sports_type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_special
-- ----------------------------
INSERT INTO `nk_attribute_special` VALUES (1, '紫外线防护', 0, NULL, '2020-09-28 08:45:34', '2020-09-28 08:45:34');
INSERT INTO `nk_attribute_special` VALUES (2, '口袋', 0, NULL, '2020-09-28 08:45:43', '2020-09-28 08:45:43');
INSERT INTO `nk_attribute_special` VALUES (3, '双面设计', 0, NULL, '2020-09-28 08:45:47', '2020-09-28 08:45:47');
INSERT INTO `nk_attribute_special` VALUES (4, '透气出众', 0, NULL, '2020-09-28 08:46:05', '2020-09-28 08:46:05');
INSERT INTO `nk_attribute_special` VALUES (5, '无缝', 0, NULL, '2020-09-28 08:46:55', '2020-09-28 08:46:55');
INSERT INTO `nk_attribute_special` VALUES (6, '无钉', 1, NULL, '2020-09-28 08:48:13', '2020-09-28 08:48:13');
INSERT INTO `nk_attribute_special` VALUES (7, '反光', 1, NULL, '2020-09-28 08:48:46', '2020-09-28 08:48:46');
INSERT INTO `nk_attribute_special` VALUES (8, '抗水性能', 1, NULL, '2020-09-28 08:48:51', '2020-09-28 08:48:51');
INSERT INTO `nk_attribute_special` VALUES (9, '防水性', 1, NULL, '2020-09-28 08:48:55', '2020-09-28 08:48:55');

-- ----------------------------
-- Table structure for nk_attribute_suitway
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_suitway`;
CREATE TABLE `nk_attribute_suitway`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `sports_type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_suitway
-- ----------------------------
INSERT INTO `nk_attribute_suitway` VALUES (1, '宽松', 0, NULL, '2020-09-28 08:49:39', '2020-09-28 08:49:39');
INSERT INTO `nk_attribute_suitway` VALUES (2, '修身', 0, NULL, '2020-09-28 08:49:43', '2020-09-28 08:49:43');
INSERT INTO `nk_attribute_suitway` VALUES (3, '标准', 0, NULL, '2020-09-28 08:49:46', '2020-09-28 08:49:46');
INSERT INTO `nk_attribute_suitway` VALUES (4, '紧身', 0, NULL, '2020-09-28 08:49:50', '2020-09-28 08:49:56');
INSERT INTO `nk_attribute_suitway` VALUES (5, '轻松穿脱', 1, NULL, '2020-09-28 08:50:38', '2020-09-28 08:50:38');
INSERT INTO `nk_attribute_suitway` VALUES (6, '拉链', 1, NULL, '2020-09-28 08:50:43', '2020-09-28 08:50:43');
INSERT INTO `nk_attribute_suitway` VALUES (7, '固定带', 1, NULL, '2020-09-28 08:50:47', '2020-09-28 08:50:47');
INSERT INTO `nk_attribute_suitway` VALUES (8, '牛角扣', 1, NULL, '2020-09-28 08:50:52', '2020-09-28 08:50:52');
INSERT INTO `nk_attribute_suitway` VALUES (9, '自动', 1, NULL, '2020-09-28 08:51:47', '2020-09-28 08:51:47');
INSERT INTO `nk_attribute_suitway` VALUES (10, '搭扣', 1, NULL, '2020-09-28 08:51:51', '2020-09-28 08:51:51');

-- ----------------------------
-- Table structure for nk_attribute_technique
-- ----------------------------
DROP TABLE IF EXISTS `nk_attribute_technique`;
CREATE TABLE `nk_attribute_technique`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_attribute_technique
-- ----------------------------
INSERT INTO `nk_attribute_technique` VALUES (2, 'Dir-FIT', 0, '2020-09-28 09:00:01', '2020-09-28 09:00:01');
INSERT INTO `nk_attribute_technique` VALUES (3, 'AeraAdapt', 0, '2020-09-28 09:00:32', '2020-09-28 09:00:32');
INSERT INTO `nk_attribute_technique` VALUES (4, 'Therma-FIT', 0, '2020-09-28 09:00:43', '2020-09-28 09:00:43');
INSERT INTO `nk_attribute_technique` VALUES (5, 'Vaporknit', 0, '2020-09-28 09:01:17', '2020-09-28 09:01:24');
INSERT INTO `nk_attribute_technique` VALUES (6, 'Nike Zoom Air', 0, '2020-09-28 09:01:57', '2020-09-28 09:02:24');
INSERT INTO `nk_attribute_technique` VALUES (7, 'Nike Joyride', 1, '2020-09-28 09:02:55', '2020-09-28 09:02:55');
INSERT INTO `nk_attribute_technique` VALUES (8, 'Flyknit', 1, '2020-09-28 09:03:08', '2020-09-28 09:03:08');
INSERT INTO `nk_attribute_technique` VALUES (9, 'Flymesh', 1, '2020-09-28 09:03:17', '2020-09-28 09:03:17');
INSERT INTO `nk_attribute_technique` VALUES (10, 'Flyweave', 1, '2020-09-28 09:03:26', '2020-09-28 09:03:26');
INSERT INTO `nk_attribute_technique` VALUES (11, 'Nike Flywire', 1, '2020-09-28 09:05:16', '2020-09-28 09:05:16');
INSERT INTO `nk_attribute_technique` VALUES (12, 'GORE-TEX', 1, '2020-09-28 09:05:27', '2020-09-28 09:05:27');
INSERT INTO `nk_attribute_technique` VALUES (13, 'Nike Air', 1, '2020-09-28 09:05:42', '2020-09-28 09:05:42');
INSERT INTO `nk_attribute_technique` VALUES (14, 'Nike Zoom Air', 1, '2020-09-28 09:05:53', '2020-09-28 09:05:53');

-- ----------------------------
-- Table structure for nk_banner
-- ----------------------------
DROP TABLE IF EXISTS `nk_banner`;
CREATE TABLE `nk_banner`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int NULL DEFAULT NULL,
  `imgUrl` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `relate_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `relate_goods` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_top` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_banner
-- ----------------------------
INSERT INTO `nk_banner` VALUES (6, '机能风出没', '一步飞跃,引领街头时尚潮流', 10, '1597632112691_85.jpg', NULL, NULL, 1, '2020-08-17 02:41:53', '2020-08-17 02:41:53');
INSERT INTO `nk_banner` VALUES (7, 'NIKE AIR VAPORMAX 2020 FLYKNIT', '.', 1, '1597632210946_869.jpg', NULL, NULL, 1, '2020-08-17 02:43:59', '2020-08-17 02:43:59');
INSERT INTO `nk_banner` VALUES (8, 'NIKE AIR VAPORMAX 2020 FLYKNIT.', '.', 0, '1597636113840_567.jpg', NULL, NULL, 1, '2020-08-17 03:48:42', '2020-08-17 03:48:51');
INSERT INTO `nk_banner` VALUES (9, '开学季,穿新装', '.', 2, '1597636188590_478.jpg', NULL, NULL, 1, '2020-08-17 03:49:49', '2020-08-17 03:49:49');

-- ----------------------------
-- Table structure for nk_base_type
-- ----------------------------
DROP TABLE IF EXISTS `nk_base_type`;
CREATE TABLE `nk_base_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_base_type
-- ----------------------------
INSERT INTO `nk_base_type` VALUES (1, '休闲', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (2, '跑步', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (3, '健身/训练', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (4, '滑板', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (5, '拖鞋', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (6, 'Air Jordan 1', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (7, 'Air Force 1', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (8, 'Air Max', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (9, '当季尖货', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (10, '篮球', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (11, '足球', NULL, 0, 1, 0);
INSERT INTO `nk_base_type` VALUES (12, '上衣/T恤', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (13, '外套/夹克', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (14, '连帽衫/卫衣', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (15, '运动裤/紧身裤', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (16, '休闲裤', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (17, '短裤', '', 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (18, '紧身运动福', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (19, '袜', NULL, 0, 0, 0);
INSERT INTO `nk_base_type` VALUES (20, '短裙/连衣裙', NULL, 1, 0, 0);
INSERT INTO `nk_base_type` VALUES (21, '跑步运动内衣', NULL, 1, 0, 0);
INSERT INTO `nk_base_type` VALUES (22, '舞蹈运动内衣', NULL, 1, 0, 0);
INSERT INTO `nk_base_type` VALUES (23, '瑜伽运动内衣', NULL, 1, 0, 0);

-- ----------------------------
-- Table structure for nk_brands_type
-- ----------------------------
DROP TABLE IF EXISTS `nk_brands_type`;
CREATE TABLE `nk_brands_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_brands_type
-- ----------------------------
INSERT INTO `nk_brands_type` VALUES (1, 'Nike Sportswear', NULL, 0, 0);
INSERT INTO `nk_brands_type` VALUES (2, 'NileLab', NULL, 0, 0);
INSERT INTO `nk_brands_type` VALUES (3, 'JORDAN', NULL, 0, 0);
INSERT INTO `nk_brands_type` VALUES (4, 'NBA', NULL, 0, 0);
INSERT INTO `nk_brands_type` VALUES (5, 'ACG', NULL, 0, 0);

-- ----------------------------
-- Table structure for nk_sports_star_attribute
-- ----------------------------
DROP TABLE IF EXISTS `nk_sports_star_attribute`;
CREATE TABLE `nk_sports_star_attribute`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_sports_star_attribute
-- ----------------------------
INSERT INTO `nk_sports_star_attribute` VALUES (3, '勒布朗 詹姆斯', '2020-09-28 09:17:51', '2020-09-28 09:17:51');
INSERT INTO `nk_sports_star_attribute` VALUES (4, '凯文 布兰特', '2020-09-28 09:18:17', '2020-09-28 09:18:17');
INSERT INTO `nk_sports_star_attribute` VALUES (5, '凯里 欧文', '2020-09-28 09:18:26', '2020-09-28 09:18:26');
INSERT INTO `nk_sports_star_attribute` VALUES (6, '科比 布莱恩特', '2020-09-28 09:18:39', '2020-09-28 09:18:39');
INSERT INTO `nk_sports_star_attribute` VALUES (7, '保罗 乔治', '2020-09-28 09:18:59', '2020-09-28 09:18:59');

-- ----------------------------
-- Table structure for nk_sports_type
-- ----------------------------
DROP TABLE IF EXISTS `nk_sports_type`;
CREATE TABLE `nk_sports_type`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_sports_type
-- ----------------------------
INSERT INTO `nk_sports_type` VALUES (1, '跑步', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (2, '篮球', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (3, '足球', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (4, '滑板', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (5, '网球', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (6, '健身/训练', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (7, '瑜伽', NULL, 0, 0);
INSERT INTO `nk_sports_type` VALUES (8, '高尔夫', NULL, 0, 0);

-- ----------------------------
-- Table structure for nk_story
-- ----------------------------
DROP TABLE IF EXISTS `nk_story`;
CREATE TABLE `nk_story`  (
  `storyId` int NOT NULL AUTO_INCREMENT,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `imgUrl` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `relate_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `relate_goods` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_top` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`storyId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of nk_story
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
