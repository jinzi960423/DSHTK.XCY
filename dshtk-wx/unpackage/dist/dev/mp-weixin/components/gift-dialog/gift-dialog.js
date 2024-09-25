"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "gift-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_overlay2 = common_vendor.resolveComponent("u-overlay");
  (_easycom_u_icon2 + _easycom_u_overlay2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_overlay = () => "../../uni_modules/uview-plus/components/u-overlay/u-overlay.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_overlay)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.close),
    b: common_vendor.p({
      name: "close-circle",
      color: "white",
      size: "60rpx"
    }),
    c: common_vendor.p({
      show: $props.show
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-69e3c646"]]);
wx.createComponent(Component);
