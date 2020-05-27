/*
 Navicat Premium Data Transfer

 Source Server         : sam
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : nikesql

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 27/05/2020 15:47:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `id` int(0) NOT NULL COMMENT 'bannerId',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '标题',
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'banner描述',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'banner图片地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (1, NULL, NULL, 'https://image.converse.com.cn/static/landingimg/earth_tone_suede_2005/earth_tone_suede_lp_pc_200516_01.jpg');
INSERT INTO `banner` VALUES (2, NULL, NULL, 'https://image.converse.com.cn/static/kv/pc/rokit_kv_pc_200515.jpg');
INSERT INTO `banner` VALUES (3, NULL, NULL, 'https://image.converse.com.cn/static/kv/pc/tee_campaign_kv_pc_200501.jpg');

-- ----------------------------
-- Table structure for categorygender
-- ----------------------------
DROP TABLE IF EXISTS `categorygender`;
CREATE TABLE `categorygender`  (
  `gid` int(0) NOT NULL AUTO_INCREMENT COMMENT '性别分类id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`gid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of categorygender
-- ----------------------------
INSERT INTO `categorygender` VALUES (1, '男子', '男子系列');
INSERT INTO `categorygender` VALUES (2, '女子', '女子系列');
INSERT INTO `categorygender` VALUES (3, '儿童', '儿童系列');
INSERT INTO `categorygender` VALUES (5, '男女同款', '男女同款');

-- ----------------------------
-- Table structure for categorytype
-- ----------------------------
DROP TABLE IF EXISTS `categorytype`;
CREATE TABLE `categorytype`  (
  `cid` int(0) NOT NULL COMMENT '商品类别id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '类别名称',
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '类别描述',
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of categorytype
-- ----------------------------
INSERT INTO `categorytype` VALUES (1, '鞋类', '鞋类');
INSERT INTO `categorytype` VALUES (2, '服饰', '衣服');
INSERT INTO `categorytype` VALUES (3, '背包', '背包');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品名称',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '商品价格',
  `imgurl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '首图地址',
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品介绍',
  `cid` int(0) NULL DEFAULT NULL COMMENT '商品分类id',
  `gid` int(0) NULL DEFAULT NULL COMMENT '根据性别分类',
  `sid` int(0) NULL DEFAULT NULL COMMENT '系列',
  `isHot` int(0) NULL DEFAULT NULL COMMENT '热门商品',
  `isNew` int(0) NULL DEFAULT NULL COMMENT '新品',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 73 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '【男女同款】Chuck Taylor All Star Core 常青款', 439.00, 'https://image.converse.com.cn/resources/product/101009100/101009100_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋身侧边具有标志性的Chuck Tayor All Star 圆形贴标', 1, 5, 1, 1, NULL);
INSERT INTO `goods` VALUES (2, '【男女同款】Chuck Taylor All Star Core 常青款', 439.00, 'https://image.converse.com.cn/resources/product/101010001/101010001_1M_NEW.png?2020050901https://image.converse.com.cn/resources/product/101001001/101001001_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋身侧边具有标志性的Chuck Tayor All Star 圆形贴标', 1, 5, 1, NULL, NULL);
INSERT INTO `goods` VALUES (3, '【男女同款】Chuck Taylor All Star Core 常青款', 399.00, 'https://image.converse.com.cn/resources/product/101001001/101001001_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋舌具有标志性的Chuck Tayor All Star鞋标', 1, 5, 1, NULL, 1);
INSERT INTO `goods` VALUES (4, '【男女同款】Chuck Taylor All Star Core 常青款', 439.00, 'https://image.converse.com.cn/resources/product/101013600/101013600_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋舌具有标志性的Chuck Tayor All Star鞋标', 1, 5, 1, NULL, NULL);
INSERT INTO `goods` VALUES (5, '【男女同款】Chuck Taylor All Star Core 常青款', 399.00, 'https://image.converse.com.cn/resources/product/101007600/101007600_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋舌具有标志性的Chuck Tayor All Star鞋标', 1, 5, 1, NULL, NULL);
INSERT INTO `goods` VALUES (6, '【男女同款】Chuck Taylor All Star Core 常青款', 439.00, 'https://image.converse.com.cn/resources/product/102307401/102307401_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋舌具有标志性的Chuck Tayor All Star鞋标', 1, 5, 1, NULL, NULL);
INSERT INTO `goods` VALUES (7, '【男女同款】Chuck Taylor All Star Core 常青款', 399.00, 'https://image.converse.com.cn/resources/product/101000100/101000100_1M_NEW.png?2020050901', '经久不衰的纯色经典常青款，鞋舌具有标志性的Chuck Tayor All Star鞋标', 1, 5, 1, NULL, NULL);
INSERT INTO `goods` VALUES (8, '【男女同款】Jack Purcell', 469.00, 'https://image.converse.com.cn/resources/product/167707C530/167707C530_1M_NEW.png?2020050901', '低帮斜纹纺织织物轻便胶鞋采用环保棉聚酯纤维混纺结构', 1, 5, 2, NULL, NULL);
INSERT INTO `goods` VALUES (9, '【男的】Jack Purcell', 499.00, 'https://image.converse.com.cn/resources/product/167830C001/167830C001_1M_NEW.png?2020050901', '低帮斜纹纺织织物轻便胶鞋采用环保棉聚酯纤维混纺结构', 1, 1, 2, NULL, NULL);
INSERT INTO `goods` VALUES (10, '【男女同款】Jack Purcell LP', 469.00, 'https://image.converse.com.cn/resources/product/165588C001/165588C001_1M_NEW.png?2020050901', '低帮斜纹纺织织物轻便胶鞋采用环保棉聚酯纤维混纺结构', 1, 5, 2, 1, NULL);
INSERT INTO `goods` VALUES (11, '【小童】Jack Purcell 3V', 399.00, 'https://image.converse.com.cn/resources/product/368144C467/368144C467_1M_NEW.png?2020050901', '低帮斜纹纺织织物轻便胶鞋采用环保棉聚酯纤维混纺结构', 1, 3, 2, NULL, NULL);
INSERT INTO `goods` VALUES (12, '【男女同款】Jack Purcell', 499.00, 'https://image.converse.com.cn/resources/product/167621C036/167621C036_1M_NEW.png?2020050901', '低帮斜纹纺织织物轻便胶鞋采用环保棉聚酯纤维混纺结构', 1, 5, 2, NULL, 1);
INSERT INTO `goods` VALUES (13, '【男的】CONVERSE JACK PURCELL SMILE S/S TEE', 219.00, 'https://image.converse.com.cn/resources/product/10020930659/10020930659_1M_NEW.png?2020050901', '【男的】CONVERSE JACK PURCELL SMILE S/S TEE', 2, 1, 2, NULL, NULL);
INSERT INTO `goods` VALUES (14, '【男女同款】CONVERSE JACK PURCELL SMILE S/S TEE', 219.00, 'https://image.converse.com.cn/resources/product/10020930063/10020930063_1M_NEW.png?2020050901', '【男女同款】CONVERSE JACK PURCELL SMILE S/S TEE', 2, 1, 2, NULL, NULL);
INSERT INTO `goods` VALUES (15, '【男女同款】Chuck 70', 538.00, 'https://image.converse.com.cn/resources/product/167750C281/167750C281_1M_NEW.png?2020050901', '【男女同款】Chuck 70', 1, 5, 3, NULL, NULL);
INSERT INTO `goods` VALUES (16, '【男女同款】Chuck 70', 639.00, 'https://image.converse.com.cn/resources/product/169039C102/169039C102_1M_NEW.png?2020050901', '【男女同款】Chuck 70', 1, 5, 3, NULL, NULL);
INSERT INTO `goods` VALUES (17, '【男女同款】Chuck 70', 599.00, 'https://image.converse.com.cn/resources/product/169047C281/169047C281_1M_NEW.png?2020050901', '【男女同款】Chuck 70', 1, 5, 3, 1, NULL);
INSERT INTO `goods` VALUES (18, '【男女同款】Chuck 70', 599.00, 'https://image.converse.com.cn/resources/product/167912C281/167912C281_1M_NEW.png?2020050901', '【男女同款】Chuck 70', 1, 5, 3, NULL, NULL);
INSERT INTO `goods` VALUES (19, '【男女同款】Converse Disrupt CX', 839.00, 'https://image.converse.com.cn/resources/product/167753C986/167753C986_1M_NEW.png?2020050901', '【男女同款】Converse Disrupt CX', 1, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (20, '【男女同款】Chuck Taylor Disrupt CX', 639.00, 'https://image.converse.com.cn/resources/product/167712C102/167712C102_1M_NEW.png?2020050901', '【男女同款】Chuck Taylor Disrupt CX', 1, 5, 4, NULL, 1);
INSERT INTO `goods` VALUES (21, '【男女同款】Chuck Taylor All Star', 439.00, 'https://image.converse.com.cn/resources/product/167859C102/167859C102_1M_NEW.png?2020050901', '【男女同款】Chuck Taylor All Star', 1, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (22, '【男女同款】Chuck Taylor All Star', 469.00, 'https://image.converse.com.cn/resources/product/167836C102/167836C102_1M_NEW.png?2020050901', '【男女同款】Chuck Taylor All Star', 1, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (23, '【男的】Converse Greetings SS Tee', 179.00, 'https://image.converse.com.cn/resources/product/10019604102/10019604102_1M_NEW.png?2020050901', '【男的】Converse Greetings SS Tee', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (24, '【男的】Converse Ivy Wordmark Tee', 179.00, 'https://image.converse.com.cn/resources/product/10018853102/10018853102_1M_NEW.png?2020050901', '【男的】Converse Ivy Wordmark Tee', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (25, '【男的】Converse Vice SS Tee', 179.00, 'https://image.converse.com.cn/resources/product/10019893102/10019893102_1M_NEW.png?2020050901', '【男的】Converse Vice SS Tee', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (26, '【男的】CONVERSE JERSEY OPEN HEM PANT', 439.00, 'https://image.converse.com.cn/resources/product/10018820001/10018820001_1M_NEW.png?2020050901', '【男的】CONVERSE JERSEY OPEN HEM PANT', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (27, '【男女同款】Sling Pack', 159.00, 'https://image.converse.com.cn/resources/product/10018980336/10018980336_1M_NEW.png?2020050901', '【男女同款】Sling Pack', 3, 5, 4, 1, NULL);
INSERT INTO `goods` VALUES (28, '【男女同款】Lock Up Baseball HPS', 109.00, 'https://image.converse.com.cn/resources/product/10008479001/10008479001_1M_NEW.png?2020050901', '【男女同款】Lock Up Baseball HPS', 2, 5, 4, NULL, 1);
INSERT INTO `goods` VALUES (29, '【男女同款】PRIDE BASEBALL HPS', 199.00, 'https://image.converse.com.cn/resources/product/10018900102/10018900102_1M_NEW.png?2020050901', '【男女同款】PRIDE BASEBALL HPS', 2, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (30, '【男女同款】Chuck Taylor All Star', 469.00, 'https://image.converse.com.cn/resources/product/167658C205/167658C205_1M_NEW.png?2020050901', '【男女同款】Chuck Taylor All Star', 1, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (31, '【男的】Converse Chuck Patch Tee', 179.00, 'https://image.converse.com.cn/resources/product/10007887035/10007887035_1M_NEW.png?2020050901', '【男的】Converse Chuck Patch Tee', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (32, '【男的】Converse Chuck Patch Tee', 179.00, 'https://image.converse.com.cn/resources/product/10007887035/10007887035_1M_NEW.png?2020050901', '【男的】Converse Chuck Patch Tee', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (33, '【男的】Converse Star Chevron Tee', 199.00, 'https://image.converse.com.cn/resources/product/10018568323/10018568323_1M_NEW.png?2020050901', '【男的】Converse Star Chevron Tee', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (34, '【男的】CONVERESE ART COLLAGE TEE', 199.00, 'https://image.converse.com.cn/resources/product/10018868102/10018868102_1M_NEW.png?2020050901', '【男的】CONVERESE ART COLLAGE TEE', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (35, '【男的】Converse Star Chevron Emb Short FT', 305.00, 'https://image.converse.com.cn/resources/product/10008929323/10008929323_1M_NEW.png?2020050901', '【男的】Converse Star Chevron Emb Short FT', 2, 1, 4, NULL, NULL);
INSERT INTO `goods` VALUES (36, '【男女同款】GO 2 Backpack', 305.00, 'https://image.converse.com.cn/resources/product/10018975401/10018975401_1M_NEW.png?2020050901', '【男女同款】GO 2 Backpack', 3, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (37, '【男女同款】Straight Edge Backpack', 339.00, 'https://image.converse.com.cn/resources/product/10018972401/10018972401_1M_NEW.png?2020050901', '【男女同款】Straight Edge Backpack', 3, 5, 4, NULL, 1);
INSERT INTO `goods` VALUES (38, '【男女同款】Straight Edge Backpack', 299.00, 'https://image.converse.com.cn/resources/product/10017270610/10017270610_1M_NEW.png?2020050901', '【男女同款】Straight Edge Backpack', 3, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (39, '【男女同款】Cross Body 2', 199.00, 'https://image.converse.com.cn/resources/product/10018984401/10018984401_1M_NEW.png?2020050901', '【男女同款】Cross Body 2', 3, 5, 4, 1, NULL);
INSERT INTO `goods` VALUES (40, '【男女同款】Sling Pack', 159.00, 'https://image.converse.com.cn/resources/product/10018982102/10018982102_1M_NEW.png?2020050901', '【男女同款】Sling Pack', 3, 5, 4, NULL, 1);
INSERT INTO `goods` VALUES (41, '【男女同款】NOVELTY BUCKET', 215.00, 'https://image.converse.com.cn/resources/product/10018909467/10018909467_1M_NEW.png?2020050901', '【男女同款】NOVELTY BUCKET', 2, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (42, '【男女同款】PRIDE SINGLE CREW', 39.00, 'https://image.converse.com.cn/resources/product/10020391102/10020391102_1M_NEW.png?2020050901', '【男女同款】PRIDE SINGLE CREW', 2, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (43, '【男女同款】GRAPHIC SINGLE FOOTIE', 39.00, 'https://image.converse.com.cn/resources/product/10020396281/10020396281_1M_NEW.png?2020050901', '【男女同款】GRAPHIC SINGLE FOOTIE', 2, 5, 4, NULL, 1);
INSERT INTO `goods` VALUES (44, '【男女同款】Chuck Taylor All Star', 499.00, 'https://image.converse.com.cn/resources/product/166735C102/166735C102_1M_NEW.png?2020050901', '【男女同款】Chuck Taylor All Star', 1, 5, 4, 1, 0);
INSERT INTO `goods` VALUES (45, '【男女同款】Hip Pack', 239.00, 'https://image.converse.com.cn/resources/product/10006946001/10006946001_1M_NEW.png?2020050901', '【男女同款】Hip Pack', 3, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (46, '【男女同款】Lock Up Baseball HPS', 109.00, 'https://image.converse.com.cn/resources/product/10008479281/10008479281_1M_NEW.png?2020050901', '【男女同款】Lock Up Baseball HPS', 2, 5, 4, NULL, NULL);
INSERT INTO `goods` VALUES (47, '【男女同款】One Star', 599.00, 'https://image.converse.com.cn/resources/product/166848C753/166848C753_1M_NEW.png?2020050901', '【男女同款】One Star', 1, 5, 5, NULL, NULL);
INSERT INTO `goods` VALUES (48, '【男女同款】One Star HanByeol', 699.00, 'https://image.converse.com.cn/resources/product/167326C102/167326C102_1M_NEW.png?2020050901', '【男女同款】One Star HanByeol', 1, 5, 5, 1, 0);
INSERT INTO `goods` VALUES (49, '【男女同款】One Star Pro 低帮', 599.00, 'https://image.converse.com.cn/resources/product/159579C001/159579C001_1M_NEW.png?2020050901', '【男女同款】One Star Pro 低帮', 1, 5, 5, NULL, 1);
INSERT INTO `goods` VALUES (50, '【男女同款】Louie Lopez Pro', 499.00, 'https://image.converse.com.cn/resources/product/167619C281/167619C281_1M_NEW.png?2020050901', '【男女同款】Louie Lopez Pro', 1, 5, 6, NULL, NULL);
INSERT INTO `goods` VALUES (51, '【男女同款】Converse x Golf le Fleur* Gianno', 939.00, 'https://image.converse.com.cn/resources/product/168180C454/168180C454_1M_NEW.png?2020050901', '【男女同款】Converse x Golf le Fleur* Gianno', 1, 5, 6, 1, NULL);
INSERT INTO `goods` VALUES (52, '【男女同款】Star Player', 439.00, 'https://image.converse.com.cn/resources/product/167672C456/167672C456_1M_NEW.png?2020050901', '【男女同款】Star Player', 1, 5, 6, NULL, NULL);
INSERT INTO `goods` VALUES (53, '【男女同款】Star Player', 469.00, 'https://image.converse.com.cn/resources/product/166796C079/166796C079_1M_NEW.png?2020050901', '【男女同款】Star Player', 1, 5, 6, NULL, NULL);
INSERT INTO `goods` VALUES (54, '【男女同款】Star Player', 539.00, 'https://image.converse.com.cn/resources/product/167980C638/167980C638_1M_NEW.png?2020050901', '【男女同款】Star Player', 1, 5, 6, NULL, NULL);
INSERT INTO `goods` VALUES (55, '【男女同款】Pro Leather', 569.00, 'https://image.converse.com.cn/resources/product/167853C102/167853C102_1M_NEW.png?2020050901', '【男女同款】Pro Leather', 1, 5, 7, 0, NULL);
INSERT INTO `goods` VALUES (56, '【男女同款】1980 Pack Pro Leather Ox', 669.00, 'https://image.converse.com.cn/resources/product/167267C102/167267C102_1M_NEW.png?2020050901', '【男女同款】1980 Pack Pro Leather Ox', 1, 5, 7, NULL, NULL);
INSERT INTO `goods` VALUES (57, '【女的】Jack Purcell LP', 499.00, 'https://image.converse.com.cn/resources/product/168139C659/168139C659_1M_NEW.png?2020050901', '【女的】Jack Purcell LP', 1, 2, 2, NULL, NULL);
INSERT INTO `goods` VALUES (58, '【女的】Jack Purcell LP', 499.00, 'https://image.converse.com.cn/resources/product/168140C102/168140C102_1M_NEW.png?2020050901', '【女的】Jack Purcell LP', 1, 2, 2, NULL, NULL);
INSERT INTO `goods` VALUES (59, '【女的】Chuck 70', 599.00, 'https://image.converse.com.cn/resources/product/169057C800/169057C800_1M_NEW.png?2020050901', '【女的】Chuck 70', 1, 2, 3, NULL, NULL);
INSERT INTO `goods` VALUES (60, '【女的】Chuck 70', 699.00, 'https://image.converse.com.cn/resources/product/566750C102/566750C102_1M_NEW.png?2020050901', '【女的】Chuck 70', 1, 2, 3, 0, NULL);
INSERT INTO `goods` VALUES (61, '【女的】Chuck Taylor All Star Lift', 469.00, 'https://image.converse.com.cn/resources/product/567855C830/567855C830_1M_NEW.png?2020050901', '【女的】Chuck Taylor All Star Lift', 1, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (62, '【女的】VLTG', 699.00, 'https://image.converse.com.cn/resources/product/566792C102/566792C102_1M_NEW.png?2020050901', '【女的】VLTG', 1, 2, 6, NULL, NULL);
INSERT INTO `goods` VALUES (63, '【女的】VLTG', 699.00, 'https://image.converse.com.cn/resources/product/565062C102/565062C102_1M_NEW.png?2020050901', '【女的】VLTG', 1, 2, 6, NULL, NULL);
INSERT INTO `goods` VALUES (64, '【大童】Chuck Taylor All Star', 319.00, 'https://image.converse.com.cn/resources/product/667784C456/667784C456_1M_NEW.png?2020050901', '【大童】Chuck Taylor All Star', 1, 3, 4, NULL, NULL);
INSERT INTO `goods` VALUES (65, '【女的】Converse Womens Stars Are Rising OS Tee', 199.00, 'https://image.converse.com.cn/resources/product/10019964102/10019964102_1M_NEW.png?2020050901', '【女的】Converse Womens Stars Are Rising OS Tee', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (66, '【女的】CONVERSE WOMEN TWILL UTILITY SHORT', 369.00, 'https://image.converse.com.cn/resources/product/10018962281/10018962281_1M_NEW.png?2020050901', '【女的】CONVERSE WOMEN TWILL UTILITY SHORT', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (67, '【女的】Hyper Local Shoelace Inspired Graphic Short Sleeve Tee', 219.00, 'https://image.converse.com.cn/resources/product/10020855102/10020855102_1M_NEW.png?2020050901', '【女的】Hyper Local Shoelace Inspired Graphic Short Sleeve Tee', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (68, '【女的】CONVERSE WOMENS RESPECT PHOTO OS TEE', 199.00, 'https://image.converse.com.cn/resources/product/10019568102/10019568102_1M_NEW.png?2020050901', '【女的】CONVERSE WOMENS RESPECT PHOTO OS TEE', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (69, '【女的】CONVERSE WOMENS JERSEY UTILITY PANT', 359.00, 'https://image.converse.com.cn/resources/product/10019138315/10019138315_1M_NEW.png?2020050901', '【女的】CONVERSE WOMENS JERSEY UTILITY PANT', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (70, '【女的】Women\'s Sakura PO Hoodie', 439.00, 'https://image.converse.com.cn/resources/product/10018477681/10018477681_1M_NEW.png?2020050901', '【女的】Women\'s Sakura PO Hoodie', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (71, '【女的】BIB FRONT SKIRT', 499.00, 'https://image.converse.com.cn/resources/product/10018415001/10018415001_1M_NEW.png?2020050901', '【女的】BIB FRONT SKIRT', 2, 2, 4, NULL, NULL);
INSERT INTO `goods` VALUES (72, '【女的】TWISTED VARSITY KNIT JACKET', 599.00, 'https://image.converse.com.cn/resources/product/10018557001/10018557001_1M_NEW.png?2020050901', '【女的】TWISTED VARSITY KNIT JACKET', 2, 2, 4, NULL, NULL);

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户id',
  `order_time` datetime(0) NULL DEFAULT NULL COMMENT '下单时间',
  `num` int(0) NULL DEFAULT NULL COMMENT '交易数量',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '收货地址',
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '收货电话',
  `order_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '收货人',
  PRIMARY KEY (`id`, `user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for ordergoods
-- ----------------------------
DROP TABLE IF EXISTS `ordergoods`;
CREATE TABLE `ordergoods`  (
  `oid` int(0) NOT NULL COMMENT '交易id',
  `gid` int(0) NULL DEFAULT NULL COMMENT '商品id',
  `did` int(0) NOT NULL AUTO_INCREMENT COMMENT '交易码',
  PRIMARY KEY (`did`, `oid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of ordergoods
-- ----------------------------

-- ----------------------------
-- Table structure for series
-- ----------------------------
DROP TABLE IF EXISTS `series`;
CREATE TABLE `series`  (
  `sid` int(0) NOT NULL COMMENT '系列id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '系列名称',
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '系列描述',
  PRIMARY KEY (`sid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series
-- ----------------------------
INSERT INTO `series` VALUES (1, '经典款', NULL);
INSERT INTO `series` VALUES (2, 'JACK PURCELL', NULL);
INSERT INTO `series` VALUES (3, 'CHUNK 70', NULL);
INSERT INTO `series` VALUES (4, 'ALL STAR', NULL);
INSERT INTO `series` VALUES (5, 'ONE STAR', NULL);
INSERT INTO `series` VALUES (6, 'CONS', NULL);
INSERT INTO `series` VALUES (7, 'PRO LEATHER', NULL);

-- ----------------------------
-- Table structure for shoppingcart
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart`  (
  `gid` int(0) NOT NULL COMMENT '商品id',
  `user_id` int(0) NOT NULL COMMENT '用户',
  `num` int(0) NULL DEFAULT NULL COMMENT '商品数量',
  `good_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品描述',
  `good_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '商品图片',
  PRIMARY KEY (`user_id`, `gid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of shoppingcart
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'sameen', '18363945111', '0', 'sameen@qq.com', '123456');

SET FOREIGN_KEY_CHECKS = 1;
