"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const mineApi = {
  /**
   * 获取我的小仓库
   **/
  GetPrizeListByOpenId(businessId, openId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetPrizeListByOpenId",
        method: "GET",
        data: {
          BusinessId: businessId,
          OpenId: openId
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
      userInfo: {},
      dataList: []
    };
  },
  mounted() {
    var businessId = utils_appStorage.appStorage.getStorage("businessId");
    utils_common.commonutils.GetOpenId().then((openid) => {
      mineApi.GetPrizeListByOpenId(businessId, openid).then((dataList) => {
        this.dataList = dataList.Data;
      });
    });
    utils_common.commonutils.GetUserInfo().then((userInfo) => {
      this.userInfo = userInfo.Data;
    });
  }
};
if (!Array) {
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  (_easycom_net_image2 + _easycom_u_icon2 + _easycom_bottom_support_info2)();
}
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
if (!Math) {
  (_easycom_net_image + _easycom_u_icon + _easycom_bottom_support_info)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      imageUrl: $data.userInfo.WxIcon,
      radius: "46rpx"
    }),
    b: common_vendor.t($data.userInfo.NickName),
    c: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "7c2ebfa5-1-" + i0,
        b: common_vendor.p({
          width: "60rpx",
          height: "60rpx",
          radius: "30rpx",
          imageUrl: item.ImgUrl
        }),
        c: common_vendor.t(item.Name),
        d: common_vendor.t(item.Count),
        e: "7c2ebfa5-2-" + i0,
        f: index,
        g: common_vendor.o(($event) => _ctx.$u.route("/pages/redemption/redemption?PrizeId=" + item.PrizeId), index)
      };
    }),
    d: common_vendor.p({
      name: "arrow-right",
      color: "#999",
      size: "24rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c2ebfa5"]]);
wx.createPage(MiniProgramPage);
