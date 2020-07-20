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

 Date: 20/07/2020 17:55:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `passwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `authority` int(0) NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES (1, 'admin', '123456', '18364477711', '81111@qq.com', '2020-07-08 00:00:00', 0, 'https://tvax4.sinaimg.cn/crop.0.0.379.379.180/007jermFly8gc8p1lhj1gj30aj0ajq3t.jpg?KID=imgbed,tva&Expires=1594180975&ssig=dXHSa3SrfK');

-- ----------------------------
-- Table structure for goods_base_type
-- ----------------------------
DROP TABLE IF EXISTS `goods_base_type`;
CREATE TABLE `goods_base_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int(0) NULL DEFAULT NULL,
  `type` int(0) NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_base_type
-- ----------------------------
INSERT INTO `goods_base_type` VALUES (1, '休闲', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (2, '跑步', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (3, '健身/训练', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (4, '滑板', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (5, '拖鞋', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (6, 'Air Jordan 1', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (7, 'Air Force 1', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (8, 'Air Max', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (9, '当季尖货', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (10, '篮球', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (11, '足球', NULL, 0, 0, 0);
INSERT INTO `goods_base_type` VALUES (12, '上衣/T恤', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (13, '外套/夹克', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (14, '连帽衫/卫衣', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (15, '运动裤/紧身裤', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (16, '休闲裤', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (17, '短裤', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (18, '紧身运动福', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (19, '袜', NULL, 0, 1, 0);
INSERT INTO `goods_base_type` VALUES (20, '短裙/连衣裙', NULL, 1, 1, 0);
INSERT INTO `goods_base_type` VALUES (21, '跑步运动内衣', NULL, 1, 1, 0);
INSERT INTO `goods_base_type` VALUES (22, '舞蹈运动内衣', NULL, 1, 1, 0);
INSERT INTO `goods_base_type` VALUES (23, '瑜伽运动内衣', NULL, 1, 1, 0);

-- ----------------------------
-- Table structure for goods_brands_type
-- ----------------------------
DROP TABLE IF EXISTS `goods_brands_type`;
CREATE TABLE `goods_brands_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int(0) NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_brands_type
-- ----------------------------
INSERT INTO `goods_brands_type` VALUES (1, 'Nike Sportswear', NULL, 0, 0);
INSERT INTO `goods_brands_type` VALUES (2, 'NileLab', NULL, 0, 0);
INSERT INTO `goods_brands_type` VALUES (3, 'JORDAN', NULL, 0, 0);
INSERT INTO `goods_brands_type` VALUES (4, 'NBA', NULL, 0, 0);
INSERT INTO `goods_brands_type` VALUES (5, 'ACG', NULL, 0, 0);

-- ----------------------------
-- Table structure for goods_sports_type
-- ----------------------------
DROP TABLE IF EXISTS `goods_sports_type`;
CREATE TABLE `goods_sports_type`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` int(0) NULL DEFAULT NULL,
  `is_delete` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_sports_type
-- ----------------------------
INSERT INTO `goods_sports_type` VALUES (1, '跑步', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (2, '篮球', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (3, '足球', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (4, '滑板', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (5, '网球', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (6, '健身/训练', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (7, '瑜伽', NULL, 0, 0);
INSERT INTO `goods_sports_type` VALUES (8, '高尔夫', NULL, 0, 0);

SET FOREIGN_KEY_CHECKS = 1;
