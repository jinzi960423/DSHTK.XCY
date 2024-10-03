"use strict";
const common_vendor = require("./common/vendor.js");
const utils_common = require("./utils/common.js");
const loginApi = {
  updatePwd(account, password, newPwd) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/UpdatePwd",
        method: "GET",
        data: {
          Account: account,
          Password: password,
          NewPwd: newPwd
        },
        success: function(res) {
          console.log(res.data);
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /**
   * 商户登录
   **/
  BusinessLogin(account, password) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/BusinessLogin",
        method: "GET",
        data: {
          Account: account,
          Password: password
        },
        success: function(res) {
          console.log(res.data);
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  }
};
exports.loginApi = loginApi;
