"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dataList: [1, 2, 3, 4, 5]
    };
  },
  methods: {}
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
      height: "300rpx",
      width: "100%",
      imageUrl: "https://www.sfj365.com/dshtk/images/tck_gift.png"
    }),
    b: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "167fdda7-1-" + i0,
        b: index
      };
    }),
    c: common_vendor.p({
      width: "90rpx",
      height: "90rpx",
      radius: "45rpx"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-167fdda7"]]);
wx.createPage(MiniProgramPage);
