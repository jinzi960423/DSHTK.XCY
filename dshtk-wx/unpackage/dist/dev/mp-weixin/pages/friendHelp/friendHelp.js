"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_safe_bottom_view2 = common_vendor.resolveComponent("safe-bottom-view");
  (_easycom_net_image2 + _easycom_bottom_support_info2 + _easycom_safe_bottom_view2)();
}
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_safe_bottom_view = () => "../../components/safe-bottom-view/safe-bottom-view.js";
if (!Math) {
  (_easycom_net_image + _easycom_bottom_support_info + _easycom_safe_bottom_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      height: "300rpx",
      width: "100%",
      imageUrl: "https://www.sfj365.com/dshtk/images/tck_gift.png"
    }),
    b: common_vendor.p({
      height: "385rpx",
      width: "385rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-506b22b1"]]);
wx.createPage(MiniProgramPage);
