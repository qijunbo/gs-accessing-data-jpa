
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for deal
-- ----------------------------
DROP TABLE IF EXISTS `testinit`;
CREATE TABLE `testinit` (
  `dealmonth` varchar(255) DEFAULT NULL,
  `dealdate` varchar(255) DEFAULT NULL,
  `dealtime` varchar(255) DEFAULT NULL,
  `stocknum` varchar(255) DEFAULT NULL,
  `stockname` varchar(255) DEFAULT NULL,
  `buyflag` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `ordernum` varchar(255) DEFAULT NULL,
  `dealnum` varchar(255) DEFAULT NULL,
  `holder` varchar(255) DEFAULT NULL,
  `money` varchar(255) DEFAULT NULL,
  `fee` varchar(255) DEFAULT NULL,
  `duty` varchar(255) DEFAULT NULL,
  `tfee` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
