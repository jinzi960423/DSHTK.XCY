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
      likeList: []
    };
  },
  onLoad(options) {
    this.id = options.Id;
    this.sourceOpenId = options.openId;
    this.businessId = options.businessId;
  },
  mounted() {
    utils_common.commonutils.GetOpenId().then((openid) => {
      if (openid != this.sourceOpenId) {
        this.shareShow = false;
      }
    });
    forwardApi.GetWarehouseDetail(this.id).then((data) => {
      this.warehouseInfo = data.Data;
    });
    forwardApi.GetLikeListByWarehouseId(this.id).then((data) => {
      console.log(data);
      this.likeList = data.Data;
    });
  },
  methods: {
    UserAssist() {
      common_vendor.index.$u.route("/pages/turntable/turntable?id=" + this.id + "&businessId=" + this.businessId + "&sourceOpenId=" + this.openId);
    }
  }
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
    })
  } : !$data.shareShow ? {
    h: common_vendor.p({
      height: "300rpx",
      width: "100%",
      imageUrl: $data.warehouseInfo.ImgUrl
    }),
    i: common_vendor.t($data.warehouseInfo.Remark),
    j: common_vendor.o((...args) => $options.UserAssist && $options.UserAssist(...args))
  } : {}, {
    g: !$data.shareShow
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-167fdda7"]]);
wx.createPage(MiniProgramPage);
