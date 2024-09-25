"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "safe-bottom-view",
  data() {
    return {
      safeBottom: 0
    };
  },
  mounted() {
    let sys = common_vendor.index.getSystemInfoSync();
    var bottom = 10;
    if (sys.safeAreaInsets.bottom > 0) {
      bottom = sys.safeAreaInsets.bottom;
    }
    this.safeBottom = bottom;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.safeBottom + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
