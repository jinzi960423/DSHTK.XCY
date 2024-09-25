"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dataList: [],
      showGift: true,
      giftInfo: null
    };
  },
  onLoad(options) {
    this.giftInfo = options;
  },
  methods: {
    refreshData() {
      this.$refs.paging.complete([{
        name: "白吃白喝",
        title: "更多福利等你参与",
        path: "/pages/free/free"
      }, {
        name: "霸王餐",
        title: "500元进群",
        path: "/pages/activity/activity"
      }, {
        name: "小仓库",
        title: "我攒的家当都在这里",
        path: "/pages/mine/mine"
      }]);
    }
  }
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_safe_bottom_view2 = common_vendor.resolveComponent("safe-bottom-view");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _easycom_gift_dialog2 = common_vendor.resolveComponent("gift-dialog");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _easycom_net_image2 + _easycom_bottom_support_info2 + _easycom_safe_bottom_view2 + _easycom_z_paging2 + _easycom_gift_dialog2)();
}
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_safe_bottom_view = () => "../../components/safe-bottom-view/safe-bottom-view.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
const _easycom_gift_dialog = () => "../../components/gift-dialog/gift-dialog.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_net_image + _easycom_bottom_support_info + _easycom_safe_bottom_view + _easycom_z_paging + _easycom_gift_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: "overflow:" + ($data.showGift ? "hidden" : "auto"),
    b: common_vendor.p({
      placeholder: true,
      title: "首页",
      autoBack: true
    }),
    c: common_vendor.p({
      name: "reload",
      size: "24rpx",
      color: "#1d1d1d",
      label: "切换",
      ["label-color"]: "#1d1d1d",
      ["label-size"]: "24rpx"
    }),
    d: common_vendor.p({
      name: "map",
      color: "#1d1d1d",
      size: "24rpx",
      label: "松江区茸梅路10号楼101室",
      ["label-color"]: "#1d1d1d",
      ["label-size"]: "24rpx"
    }),
    e: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "07e72d3c-4-" + i0 + ",07e72d3c-0",
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.title),
        d: index,
        e: common_vendor.o(($event) => _ctx.$u.route(item.path), index)
      };
    }),
    f: common_vendor.p({
      width: "705rpx",
      height: "355rpx"
    }),
    g: common_vendor.sr("paging", "07e72d3c-0"),
    h: common_vendor.o($options.refreshData),
    i: common_vendor.o(($event) => $data.dataList = $event),
    j: common_vendor.p({
      modelValue: $data.dataList
    }),
    k: common_vendor.o(($event) => $data.showGift = false),
    l: common_vendor.p({
      show: $data.showGift,
      info: $data.giftInfo
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
