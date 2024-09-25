"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dataList: [1, 2, 3, 4]
    };
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
      radius: "46rpx"
    }),
    b: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "7c2ebfa5-1-" + i0,
        b: "7c2ebfa5-2-" + i0,
        c: index,
        d: common_vendor.o(($event) => _ctx.$u.route("/pages/redemption/redemption"), index)
      };
    }),
    c: common_vendor.p({
      width: "60rpx",
      height: "60rpx",
      radius: "30rpx",
      imageUrl: "https://www.51pjdj.com/dshtk/images/tck_gift.png"
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
