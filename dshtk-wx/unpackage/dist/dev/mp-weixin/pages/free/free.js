"use strict";
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      BusinessWeChat: "",
      BnsinessName: "",
      BusinessActivity: "",
      WelfareDescriptionOne: "",
      WelfareDescriptionTwo: ""
    };
  },
  mounted() {
    utils_common.commonutils.GetOpenId().then((openId) => {
      this.openId = openId;
    });
    var businessId = utils_appStorage.appStorage.getStorage("businessId");
    utils_common.commonutils.GetBusinessInfoById(businessId).then((businessInfo) => {
      console.log(businessInfo);
      this.BusinessWeChat = businessInfo.Data.BusinessWeChat;
      this.BnsinessName = businessInfo.Data.BnsinessName;
      this.BusinessActivity = businessInfo.Data.BusinessActivity;
      this.WelfareDescriptionOne = businessInfo.Data.WelfareDescriptionOne;
      this.WelfareDescriptionTwo = businessInfo.Data.WelfareDescriptionTwo;
    });
  }
};
if (!Array) {
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  _easycom_net_image2();
}
const _easycom_net_image = () => "../../components/net-image/net-image.js";
if (!Math) {
  _easycom_net_image();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "750rpx",
      height: "421rpx",
      imageUrl: $data.BusinessActivity,
      mode: "aspectFill"
    }),
    b: common_vendor.t($data.BnsinessName || "店家名称"),
    c: common_vendor.t($data.WelfareDescriptionOne),
    d: common_vendor.t($data.WelfareDescriptionTwo),
    e: common_vendor.p({
      width: "338rpx",
      height: "338rpx",
      imageUrl: $data.BusinessWeChat
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cc172b39"]]);
wx.createPage(MiniProgramPage);
