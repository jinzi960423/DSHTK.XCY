"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "net-image",
  props: {
    imageUrl: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100rpx"
    },
    height: {
      type: String,
      default: "100rpx"
    },
    radius: {
      type: String,
      default: "0rpx"
    },
    defaultImage: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "aspectFit"
    }
  }
};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  _easycom_u_image2();
}
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
if (!Math) {
  _easycom_u_image();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.imageUrl.length == 0
  }, $props.imageUrl.length == 0 ? {
    b: common_vendor.p({
      src: $props.defaultImage,
      width: $props.width,
      height: $props.height,
      radius: $props.radius,
      mode: $props.mode
    })
  } : {
    c: common_vendor.p({
      src: $props.defaultImage,
      width: $props.width,
      height: $props.height,
      radius: $props.radius,
      mode: $props.mode
    }),
    d: common_vendor.o(_ctx.clickImg),
    e: common_vendor.p({
      src: $props.imageUrl,
      width: $props.width,
      height: $props.height,
      radius: $props.radius,
      mode: $props.mode
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
