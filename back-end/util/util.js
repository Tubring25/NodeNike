/**
 * tools
 */

const util = {
  randomCode: function (length) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var result = "";
    for (var i = 0; i < length; i++) {
      var index = Math.ceil(Math.random() * 9);
      result += chars[index];
    }
    return result.split('');
  },
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
  }
}

module.exports = util;