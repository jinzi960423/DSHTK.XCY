"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "bottom-support-info",
  props: {
    titleColor: {
      type: String,
      default: "#4E3531"
    },
    subTitleColor: {
      type: String,
      default: "#583F3B"
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.titleColor,
    b: $props.subTitleColor
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
