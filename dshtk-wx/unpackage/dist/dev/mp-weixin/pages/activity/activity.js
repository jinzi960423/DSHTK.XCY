"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    refreshData() {
      this.$refs.paging.complete([1, 2, 3, 4, 5]);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_safe_bottom_view2 = common_vendor.resolveComponent("safe-bottom-view");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  (_easycom_u_icon2 + _easycom_net_image2 + _easycom_bottom_support_info2 + _easycom_safe_bottom_view2 + _easycom_z_paging2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_safe_bottom_view = () => "../../components/safe-bottom-view/safe-bottom-view.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_u_icon + _easycom_net_image + _easycom_bottom_support_info + _easycom_safe_bottom_view + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "map",
      color: "#1d1d1d",
      size: "24rpx",
      label: "松江区茸梅路10号楼101室",
      ["label-color"]: "#1d1d1d",
      ["label-size"]: "24rpx"
    }),
    b: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "da48f91d-2-" + i0 + ",da48f91d-0",
        b: "da48f91d-3-" + i0 + ",da48f91d-0",
        c: index,
        d: common_vendor.o(($event) => _ctx.$u.route("/pages/forward/forward"), index)
      };
    }),
    c: common_vendor.p({
      width: "300rpx",
      height: "300rpx",
      imageUrl: "https://www.51pjdj.com/dshtk/images/tck_gift.png"
    }),
    d: common_vendor.p({
      name: "arrow-right-double",
      size: "28rpx",
      color: "white",
      label: "马上摇人",
      ["label-color"]: "white",
      ["label-size"]: "28rpx",
      labelPos: "left"
    }),
    e: common_vendor.sr("paging", "da48f91d-0"),
    f: common_vendor.o($options.refreshData),
    g: common_vendor.o(($event) => $data.dataList = $event),
    h: common_vendor.p({
      modelValue: $data.dataList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-da48f91d"]]);
wx.createPage(MiniProgramPage);
