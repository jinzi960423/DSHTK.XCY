"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const forwardApi = {
  GetWarehouseDetail(warehouseId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetWarehouseDetail",
        method: "GET",
        data: {
          WarehouseId: warehouseId
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
  /****
  获取点赞列表
  ****/
  GetLikeListByWarehouseId(warehouseId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetLikeListByWarehouseId",
        method: "GET",
        data: {
          WarehouseId: warehouseId
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
      id: "",
      sourceOpenId: "",
      sourcebusinessId: "",
      openId: "",
      businessId: "",
      warehouseInfo: {},
      shareShow: true,
      likeList: [],
      qrUrl: ""
    };
  },
  onLoad(options) {
    this.id = options.Id;
    this.sourceOpenId = options.openId;
    this.businessId = options.businessId;
    var th = this;
    var scene = options.scene;
    if (scene != "" && scene != null && scene != void 0) {
      th.id = scene;
      forwardApi.GetWarehouseDetail(scene).then((data) => {
        th.warehouseInfo = data.Data;
        th.sourceOpenId = data.Data.OpenId;
        th.businessId = data.Data.BusinessId;
      });
    } else {
      th.qrUrl = utils_common.commonutils.baseUrl() + "/qr/GetQrCodeZL?Id=" + this.id;
      forwardApi.GetWarehouseDetail(this.id).then((data) => {
        th.warehouseInfo = data.Data;
      });
    }
  },
  mounted() {
    var th = this;
    utils_common.commonutils.GetOpenId().then((openid) => {
      th.openId = openid;
      if (openid != this.sourceOpenId) {
        this.shareShow = false;
      }
    });
    forwardApi.GetLikeListByWarehouseId(this.id).then((data) => {
      console.log(data);
      this.likeList = data.Data;
    });
  },
  methods: {
    UserAssist() {
      common_vendor.index.$u.route("/pages/loadingPage/loadingPage?id=" + this.id + "&bId=" + this.businessId + "&sourceOpenId=" + this.openId);
    }
  }
};
if (!Array) {
  const _easycom_net_image2 = common_vendor.resolveComponent("net-image");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_safe_bottom_view2 = common_vendor.resolveComponent("safe-bottom-view");
  (_easycom_net_image2 + _easycom_bottom_support_info2 + _easycom_safe_bottom_view2)();
}
const _easycom_net_image = () => "../../components/net-image/net-image.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_safe_bottom_view = () => "../../components/safe-bottom-view/safe-bottom-view.js";
if (!Math) {
  (_easycom_net_image + _easycom_bottom_support_info + _easycom_safe_bottom_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.shareShow
  }, $data.shareShow ? {
    b: common_vendor.p({
      height: "300rpx",
      width: "100%",
      imageUrl: $data.warehouseInfo.ImgUrl
    }),
    c: common_vendor.t($data.warehouseInfo.Remark),
    d: common_vendor.t($data.warehouseInfo.Count),
    e: common_vendor.f($data.likeList, (item, index, i0) => {
      return {
        a: "167fdda7-1-" + i0,
        b: index
      };
    }),
    f: common_vendor.p({
      width: "90rpx",
      height: "90rpx",
      radius: "45rpx",
      imageUrl: "https://www.sfj365.com/dshtk/images/user.png"
    }),
    g: common_vendor.p({
      height: "300rpx",
      width: "100%",
      imageUrl: $data.qrUrl
    })
  } : !$data.shareShow ? {
    i: common_vendor.p({
      height: "300rpx",
      width: "100%",
      imageUrl: $data.warehouseInfo.ImgUrl
    }),
    j: common_vendor.t($data.warehouseInfo.Remark),
    k: common_vendor.o((...args) => $options.UserAssist && $options.UserAssist(...args))
  } : {}, {
    h: !$data.shareShow
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-167fdda7"]]);
wx.createPage(MiniProgramPage);
