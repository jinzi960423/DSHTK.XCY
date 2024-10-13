"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const homeApi = {
  /**
   * 获取首页的配置
   **/
  GetHomeConfigList(businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetHomeConfigList",
        method: "GET",
        data: {
          BusinessId: businessId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /***
  获取绑定过关系的商户
  ****/
  GetBusinessListByOpenId(openId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetBusinessListByOpenId",
        method: "GET",
        data: {
          OpenId: openId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  }
};
const _sfc_main = {
  data() {
    return {
      dataList: [],
      showGift: false,
      showShop: false,
      giftInfo: null,
      shopList: [],
      businessInfo: {},
      imageUrl: ""
    };
  },
  onLoad(options) {
    this.giftInfo = options;
    if (options.Id == void 0) {
      this.showGift = false;
    } else {
      this.showGift = true;
      this.imageUrl = options.ImgUrl;
    }
    common_vendor.index.reLaunch({
      url: "/pages/free/free"
    });
  },
  mounted() {
    utils_common.commonutils.GetOpenId().then((openId) => {
      this.openId = openId;
      homeApi.GetBusinessListByOpenId(openId).then((data) => {
        this.shopList = data.Data;
        var businessId = utils_appStorage.appStorage.getStorage("businessId");
        if (businessId == "" || businessId == void 0) {
          utils_appStorage.appStorage.setStorage("businessId", data.Data[0].Id);
        }
        this.initbusinessInfo();
      });
    });
  },
  methods: {
    openMap() {
      common_vendor.wx$1.openLocation({
        latitude: parseFloat(this.businessInfo.Latitude),
        // 纬度  
        longitude: parseFloat(this.businessInfo.Longitude),
        // 经度  
        name: this.businessInfo.BnsinessName,
        // 地点名称  
        address: this.businessInfo.Address,
        // 地址的详细说明  
        scale: 13,
        // 缩放比例  
        success: function(res) {
          console.log("打开地图成功");
        },
        fail: function(err) {
          console.log("打开地图失败", err);
        }
      });
    },
    confirmShop(e) {
      console.log("选中的值", e);
      utils_appStorage.appStorage.setStorage("businessId", e.value[0].Id);
      this.initbusinessInfo();
    },
    initbusinessInfo() {
      var businessId = utils_appStorage.appStorage.getStorage("businessId");
      utils_common.commonutils.GetBusinessInfoById(businessId).then((businessInfo) => {
        this.businessInfo = businessInfo.Data;
      });
      homeApi.GetHomeConfigList(businessId).then((config) => {
        this.dataList = config.Data;
      });
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
  const _easycom_custom_picker_dialog2 = common_vendor.resolveComponent("custom-picker-dialog");
  (_easycom_u_navbar2 + _easycom_u_icon2 + _easycom_net_image2 + _easycom_bottom_support_info2 + _easycom_safe_bottom_view2 + _easycom_z_paging2 + _easycom_gift_dialog2 + _easycom_custom_picker_dialog2)();
}
const _easycom_u_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_safe_bottom_view = () => "../../components/safe-bottom-view/safe-bottom-view.js";
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
const _easycom_gift_dialog = () => "../../components/gift-dialog/gift-dialog.js";
const _easycom_custom_picker_dialog = () => "../../components/custom-picker-dialog/custom-picker-dialog.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_icon + _easycom_net_image + _easycom_bottom_support_info + _easycom_safe_bottom_view + _easycom_z_paging + _easycom_gift_dialog + _easycom_custom_picker_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: "overflow:" + ($data.showGift || $data.showShop ? "hidden" : "auto"),
    b: common_vendor.p({
      placeholder: true,
      title: "首页",
      autoBack: true
    }),
    c: common_vendor.t($data.businessInfo.BnsinessName),
    d: $data.businessInfo.IsOnline == "Y"
  }, $data.businessInfo.IsOnline == "Y" ? {
    e: common_vendor.o(($event) => $data.showShop = true)
  } : {}, {
    f: common_vendor.o($options.openMap),
    g: common_vendor.p({
      name: "map",
      color: "#1d1d1d",
      size: "24rpx",
      label: $data.businessInfo.Address,
      ["label-color"]: "#1d1d1d",
      ["label-size"]: "24rpx"
    }),
    h: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "07e72d3c-3-" + i0 + ",07e72d3c-0",
        b: common_vendor.p({
          width: "705rpx",
          height: "355rpx",
          imageUrl: item.BackgroundImage
        }),
        c: common_vendor.t(item.FunctionName),
        d: common_vendor.t(item.FunctionDescription),
        e: index,
        f: common_vendor.o(($event) => _ctx.$u.route(item.Path), index)
      };
    }),
    i: common_vendor.sr("paging", "07e72d3c-0"),
    j: common_vendor.o(($event) => $data.dataList = $event),
    k: common_vendor.p({
      modelValue: $data.dataList
    }),
    l: common_vendor.o(($event) => $data.showGift = false),
    m: common_vendor.p({
      show: $data.showGift,
      info: $data.giftInfo,
      imageUrl: $data.imageUrl
    }),
    n: common_vendor.o(($event) => $data.showShop = false),
    o: common_vendor.o($options.confirmShop),
    p: common_vendor.p({
      show: $data.showShop,
      columns: [$data.shopList]
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"]]);
wx.createPage(MiniProgramPage);
