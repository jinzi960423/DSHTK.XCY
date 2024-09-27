"use strict";
const common_vendor = require("../common/vendor.js");
const appStorage = {
  //保存token
  setStorage(key, value) {
    common_vendor.index.setStorageSync(key, value);
  },
  //获取token
  getStorage(key) {
    return common_vendor.index.getStorageSync(key);
  }
};
exports.appStorage = appStorage;
