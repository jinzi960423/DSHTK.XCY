"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_appStorage = require("../../utils/appStorage.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  data() {
    return {
      imgUrl: "",
      businessName: ""
    };
  },
  onLoad() {
  },
  mounted() {
    var adminId = utils_appStorage.appStorage.getStorage("adminId");
    var businessName = utils_appStorage.appStorage.getStorage("businessName");
    if (adminId == "" || adminId == void 0) {
      common_vendor.index.$u.route("/admin/login/login");
    }
    this.imgUrl = utils_common.commonutils.baseUrl() + "/qr/GetQrCode?Id=" + adminId;
    this.businessName = businessName;
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
      height: "385rpx",
      width: "385rpx",
      imageUrl: $data.imgUrl
    }),
    b: common_vendor.t($data.businessName)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3e5ab7dc"]]);
wx.createPage(MiniProgramPage);
