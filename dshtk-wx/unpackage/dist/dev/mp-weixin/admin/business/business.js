"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const businessApi = {
  DeletePrize(id) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/DeletePrize",
        method: "GET",
        data: {
          Id: id
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
  PrizeSave(data) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/PrizeSave",
        method: "POST",
        data,
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
  GetPrizeEntity(prizeId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetPrizeEntity",
        method: "GET",
        data: {
          PrizeId: prizeId
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
  GetPrizeConfigList(id, page, limit, keyWord) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetPrizeConfigList?Id=" + id,
        method: "POST",
        data: {
          Page: page,
          Limit: limit,
          KeyWord: keyWord
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
  ConfigUpdateList(data) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/UpdateList",
        method: "POST",
        data,
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
  GetBusinessConfigListById(id) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetBusinessConfigListById",
        method: "GET",
        data: {
          Id: id
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
  GetBusinessListByUid(uid, page, limit) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetBusinessListByUid",
        method: "GET",
        data: {
          Uid: uid,
          Page: page,
          Limit: limit
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
  //保存商户信息
  BusinessSave(business) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/BusinessSave",
        method: "POST",
        data: business,
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  //获取城市信息
  GetCityLimitsList() {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetCityLimitsList",
        method: "GET",
        data: {},
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  selectImgUploadFile(tempFilePaths) {
    return new Promise((resolve, reject) => {
      common_vendor.index.showLoading({
        title: "上传中..."
      });
      common_vendor.index.uploadFile({
        url: utils_common.commonutils.baseUrl() + "Attachment/UploadFile",
        // 要上传文件对象-h5和微信小程序上传参数不一样只能存在一个
        // H5上传
        // file: tempFilePaths,
        // 微信小程序上传
        filePath: tempFilePaths[0],
        //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
        name: "file",
        // 请求头设置
        // 我们是需要token和用户id登录时存从uni-app数据存储中取
        // 成功函数
        success: (res) => {
          console.log("上传成功", res.data);
          resolve(res.data);
          common_vendor.index.hideLoading();
        },
        // 失败提示用户重新上传
        fail: (error) => {
          console.log("失败", error);
          reject(error);
          common_vendor.index.hideLoading();
        }
      });
    });
  }
};
exports.businessApi = businessApi;
