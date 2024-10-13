"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const turntable = require("../../turntable.js");
const loadingPageApi = {
  //好友助力
  WarehouseLike(warehouseId, openId, businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/WarehouseLike",
        method: "GET",
        data: {
          WarehouseId: warehouseId,
          OpenId: openId,
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
      id: "",
      openId: "",
      businessId: "",
      sourceOpenId: "",
      businessInfo: {
        BnsinessName: ""
      },
      Msg: "正在助力！"
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.businessId = options.bId;
    this.sourceOpenId = options.sourceOpenId;
  },
  mounted() {
    var that = this;
    utils_common.commonutils.GetBusinessInfoById(that.businessId).then((data) => {
      that.businessInfo = data.Data;
      common_vendor.index.getLocation({
        type: "wgs84",
        success: function(res) {
          console.log("当前位置的经度longitude：" + res.longitude);
          console.log("当前位置的纬度latitude：" + res.latitude);
          var longitude = parseFloat(res.longitude);
          var latitude = parseFloat(res.latitude);
          utils_common.commonutils.GetCityLimitById(that.businessInfo.CityId).then((cityData) => {
            console.log(cityData);
            if (longitude < cityData.Data.BeginLongitude || longitude > cityData.Data.EndLongitude || latitude < cityData.Data.BeginLatitude || latitude > cityData.Data.EndLatitude) {
              common_vendor.index.showModal({
                title: "温馨提示",
                content: "当前活动仅限" + cityData.Data.CityName,
                showCancel: false,
                success: function(res2) {
                  if (res2.confirm) {
                    common_vendor.wx$1.exitMiniProgram();
                  }
                }
              });
            } else {
              utils_common.commonutils.GetOpenId().then((openId) => {
                that.openId = openId;
                utils_appStorage.appStorage.setStorage("businessId", that.businessId);
                turntable.turntableApi.BindingBusiness(openId, that.businessId);
                utils_common.commonutils.GetUserInfo().then((data2) => {
                  if (!data2.Success) {
                    turntable.turntableApi.saveUserInfo(
                      that.openId,
                      "",
                      "点上花"
                    );
                  }
                });
                loadingPageApi.WarehouseLike(
                  that.id,
                  that.openId,
                  that.businessId
                ).then(
                  (likeData) => {
                    console.log(likeData);
                    if (that.id != "" && that.id != void 0) {
                      that.Msg = likeData.Message;
                      setTimeout(function() {
                        common_vendor.index.$u.route(
                          "/pages/turntable/turntable?bId=" + that.businessId
                        );
                      }, 2e3);
                    }
                  }
                );
              });
            }
          });
        },
        fail: function(error) {
          console.error("获取位置失败：", error);
          common_vendor.index.showModal({
            title: "温馨提示",
            content: "获取位置失败,请打开我的>设置>个人信息与权限 允许获取位置信息",
            showCancel: false,
            success: function(res) {
              if (res.confirm) {
                common_vendor.wx$1.exitMiniProgram();
              }
            }
          });
        }
      });
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.Msg)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-054c6a7b"]]);
wx.createPage(MiniProgramPage);
