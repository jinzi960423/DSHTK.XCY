"use strict";
const common_vendor = require("../common/vendor.js");
const utils_appStorage = require("./appStorage.js");
const commonutils = {
  //服务器接口
  baseUrl() {
    return "https://www.sfj365.com/dshtk.web/";
  },
  showToast(title, icon) {
    common_vendor.index.showToast({
      title,
      icon,
      duration: 850
    });
  },
  GetCityLimitById(Id) {
    var th = this;
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: th.baseUrl() + "api/WeChatProgram/GetCityLimitById",
        method: "GET",
        data: {
          Id
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
   * 获取商户的详细信息
   **/
  GetBusinessInfoById(businessId) {
    var th = this;
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: th.baseUrl() + "api/WeChatProgram/GetBusinessById",
        method: "GET",
        data: {
          BusinessId: businessId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /**
   * 获取注册的小程序用户信息
   **/
  GetUserInfo() {
    var th = this;
    return new Promise((resolve, reject) => {
      th.GetOpenId().then((openid) => {
        common_vendor.wx$1.request({
          url: th.baseUrl() + "api/WeChatProgram/GetUserInfo",
          data: {
            OpenId: openid
          },
          success: function(res) {
            resolve(res.data);
          },
          fail: function() {
            reject("获取openid失败");
          }
        });
      }).catch((error) => {
        console.log("获取openid失败" + error);
      });
    });
  },
  /**
   * 
   * 获取小程序用户的openid
   **/
  GetOpenId() {
    var th = this;
    return new Promise((resolve, reject) => {
      var openid = utils_appStorage.appStorage.getStorage("openid");
      if (openid) {
        resolve(openid);
      } else {
        common_vendor.wx$1.login({
          success(res) {
            console.log(res);
            if (res.code) {
              common_vendor.wx$1.request({
                url: th.baseUrl() + "api/WeChatProgram/GetOpenId",
                data: {
                  code: res.code
                },
                success: function(res2) {
                  utils_appStorage.appStorage.setStorage("openid", res2.data.Data);
                  resolve(res2.data.Data);
                },
                fail: function() {
                  reject("获取openid失败");
                }
              });
            } else {
              console.log("登录失败！" + res.errMsg);
              reject("登录失败！" + res.errMsg);
            }
          }
        });
      }
    });
  }
};
exports.commonutils = commonutils;
