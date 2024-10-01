"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const redemptionApi = {
  /**
   * 获取券详情
   **/
  GetUserPrizeDetail(openId, businessId, prizeId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetUserPrizeDetail",
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
  /***
  获取礼品详情
  *****/
  GetPrizeEntity(prizeId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetPrizeEntity",
        method: "GET",
        data: {
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
  }
};
const _sfc_main = {
  data() {
    return {
      QrCodeUrl: "",
      PrizeId: "",
      BusinessId: "",
      OpenId: "",
      NumberStr: "",
      PrizeInfo: {}
    };
  },
  onLoad(options) {
    this.PrizeId = options.PrizeId;
  },
  mounted() {
    this.BusinessId = utils_appStorage.appStorage.getStorage("businessId");
    utils_common.commonutils.GetOpenId().then((openid) => {
      this.OpenId = openid;
      redemptionApi.GetUserPrizeDetail(this.OpenId, this.BusinessId, this.PrizeId).then((data) => {
        console.log(data.Data.Number);
        this.NumberStr = data.Data.Number;
        this.QrCodeUrl = utils_common.commonutils.baseUrl() + "/Qr/Code?input=" + this.NumberStr;
      });
    });
    redemptionApi.GetPrizeEntity(this.PrizeId).then((data) => {
      console.log(data);
      this.PrizeInfo = data.Data;
    });
  }
};
if (!Array) {
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  (_easycom_net_image2 + _easycom_bottom_support_info2)();
}
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
if (!Math) {
  (_easycom_net_image + _easycom_bottom_support_info)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "60rpx",
      width: "60rpx",
      imageUrl: $data.PrizeInfo.ImgUrl
    }),
    b: common_vendor.t($data.PrizeInfo.Name),
    c: common_vendor.p({
      width: "400rpx",
      height: "400rpx",
      imageUrl: $data.QrCodeUrl
    }),
    d: common_vendor.t($data.NumberStr),
    e: common_vendor.p({
      subTitleColor: "white",
      titleColor: "white"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2912a016"]]);
wx.createPage(MiniProgramPage);
