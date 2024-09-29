"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const set_avatar = {
  /**
   * 保存微信用户的的相关信息
   * @param {Object} openid
   * @param {Object} headImg
   * @param {Object} nickName
   */
  saveUserInfo(openid, headImg, nickName) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/SaveUserInfo",
        method: "POST",
        data: {
          OpenId: openid,
          NickName: nickName,
          WxIcon: headImg
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
exports.set_avatar = set_avatar;
