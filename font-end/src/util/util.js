/**
 * 工具函数
 */

const util = {
  // 生成随机数
  randomCode: function(length) {
    var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var result = "";
    for (var i = 0; i < length; i++) {
      var index = Math.ceil(Math.random() * 9);
      result += chars[index];
    }
    return result;
  },
  // 去除空格
  trim(str, type = 1) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
      case 1:
        return str.replace(/\s/g, "");
      case 2:
        return str.replace(/(^\s)|(\s*$)/g, "");
      case 3:
        return str.replace(/(^\s)/g, "");
      case 4:
        return str.replace(/(\s$)/g, "");
      default:
        return str;
    }
  },
  // 手机号验证
  isTel(string) {
    const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g;
    return reg.test(string)
  },
  // 验证邮箱
  isEmail(string) {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
    return reg.test(string)
  }
};

module.exports = util;
