"use strict";
const common_vendor = require("../common/vendor.js");
const uni_modules_uviewPlus_libs_luchRequest_core_Request = require("../uni_modules/uview-plus/libs/luch-request/core/Request.js");
const utils_common = require("../utils/common.js");
const request = new uni_modules_uviewPlus_libs_luchRequest_core_Request.Request({
  baseURL: utils_common.commonutils.baseUrl(),
  timeout: 1e4
});
request.interceptors.request.use((config) => {
  config.header = {
    ...config.header
  };
  const {
    baseURL,
    contentType
  } = config.custom;
  if (baseURL) {
    config.baseURL = baseURL;
  }
  if (contentType) {
    config.header = {
      ...config.header,
      "content-type": contentType
    };
  }
  console.log("接口请求信息", config);
  return config;
}, (error) => {
  console.log("请求请求报错：", error);
  return Promise.reject(error);
});
request.interceptors.response.use((response) => {
  console.log("接口进入了成功回调", response);
  common_vendor.index.hideLoading();
  const {
    errorMessage,
    success,
    data
  } = response.data;
  if (success) {
    return data;
  }
  common_vendor.index.$u.toast(errorMessage || "请求失败");
  return Promise.reject(response.data);
}, (error) => {
  console.log("接口进入了失败回调", error);
  common_vendor.index.hideLoading();
  if (error.data) {
    const {
      errorMessage
    } = error.data;
    if (errorMessage) {
      common_vendor.index.$u.toast(errorMessage);
    } else if (error.data.error) {
      common_vendor.index.$u.toast(error.data.status + "：" + error.data.error);
    }
  } else {
    common_vendor.index.$u.toast("接口请求报错，请稍后再试！");
  }
  return Promise.reject(error);
});
