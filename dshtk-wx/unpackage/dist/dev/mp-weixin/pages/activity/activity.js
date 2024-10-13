"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const activityApi = {
  /***
  获取集赞中的
  ****/
  GetWarehouseEntity(openId, prizeId, businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetWarehouseEntity",
        method: "GET",
        data: {
          OpenId: openId,
          PrizeId: prizeId,
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
  /**
   * 获取活动列表
   **/
  GetPrizeList(businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetPrizeList",
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
  }
};
const _sfc_main = {
  data() {
    return {
      openId: "",
      businessInfo: {},
      prizeList: [],
      businessId: ""
    };
  },
  mounted() {
    utils_common.commonutils.GetOpenId().then((openId) => {
      this.openId = openId;
      this.businessId = utils_appStorage.appStorage.getStorage("businessId");
      utils_common.commonutils.GetBusinessInfoById(this.businessId).then((businessInfo) => {
        this.businessInfo = businessInfo.Data;
      });
      activityApi.GetPrizeList(this.businessId).then((prizeList) => {
        this.prizeList = prizeList.Data;
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
    JumpPage(prizeId) {
      console.log(prizeId);
      activityApi.GetWarehouseEntity(this.openId, prizeId, this.businessId).then((data) => {
        console.log(data);
        if (data.Success) {
          common_vendor.index.$u.route("/pages/forward/forward?Id=" + data.Data.Id + "&businessId=" + this.businessId + "&openId=" + this.openId);
        } else {
          common_vendor.index.showModal({
            title: "温馨提示",
            content: data.Message,
            showCancel: false,
            success: function(res) {
              if (res.confirm) {
                common_vendor.index.$u.route("/pages/mine/mine");
              }
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_safe_bottom_view2 = common_vendor.resolveComponent("safe-bottom-view");
  (_easycom_u_icon2 + _easycom_net_image2 + _easycom_bottom_support_info2 + _easycom_safe_bottom_view2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_safe_bottom_view = () => "../../components/safe-bottom-view/safe-bottom-view.js";
if (!Math) {
  (_easycom_u_icon + _easycom_net_image + _easycom_bottom_support_info + _easycom_safe_bottom_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.businessInfo.BnsinessName),
    b: common_vendor.o($options.openMap),
    c: common_vendor.p({
      name: "map",
      color: "#1d1d1d",
      size: "24rpx",
      label: $data.businessInfo.Address,
      ["label-color"]: "#1d1d1d",
      ["label-size"]: "24rpx"
    }),
    d: common_vendor.f($data.prizeList, (item, index, i0) => {
      return {
        a: "da48f91d-1-" + i0,
        b: common_vendor.p({
          width: "300rpx",
          height: "300rpx",
          imageUrl: item.ImgUrl
        }),
        c: common_vendor.t(item.Name),
        d: common_vendor.t(item.PrizeLike),
        e: "da48f91d-2-" + i0,
        f: index,
        g: common_vendor.o(($event) => $options.JumpPage(item.Id), index)
      };
    }),
    e: common_vendor.p({
      name: "arrow-right-double",
      size: "28rpx",
      color: "white",
      label: "马上摇人",
      ["label-color"]: "white",
      ["label-size"]: "28rpx",
      labelPos: "left"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-da48f91d"]]);
wx.createPage(MiniProgramPage);
