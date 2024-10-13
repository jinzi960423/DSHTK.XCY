"use strict";
const common_vendor = require("./common/vendor.js");
const utils_common = require("./utils/common.js");
const turntableApi = {
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
  },
  /**
   * 绑定用户和商户的关系
   ***/
  BindingBusiness(openId, businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/BindingBusiness",
        method: "GET",
        data: {
          OpenId: openId,
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
  /***
   *  保存用户的中奖信息
   **/
  SaveWheelLottery(openId, businessId, prizeId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/WheelLottery",
        method: "GET",
        data: {
          OpenId: openId,
          BusinessId: businessId,
          PrizeId: prizeId
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
   * 用户参与摇奖
   **/
  DrawLottery(businessId, openId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/DrawLottery",
        method: "GET",
        data: {
          OpenId: openId,
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
   * 获取转盘的奖品列表
   **/
  GetPrizeConfigList(businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetDrawLotteryPrizeList",
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
  }
};
exports.turntableApi = turntableApi;
