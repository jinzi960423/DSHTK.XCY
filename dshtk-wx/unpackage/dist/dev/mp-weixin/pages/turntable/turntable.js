"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_appStorage = require("../../utils/appStorage.js");
const utils_common = require("../../utils/common.js");
const turntable = require("../../turntable.js");
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
      userInfoDialog: false,
      prizeList: [],
      targetIndex: 0
      //中奖的商品对应的小标
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.businessId = options.bId;
    this.sourceOpenId = options.sourceOpenId;
    var scene = options.scene;
    if (scene != "" && scene != null && scene != void 0) {
      this.businessId = scene;
    }
  },
  mounted() {
    var that = this;
    if (that.businessId == "") {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "无效的商户二维码",
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            common_vendor.wx$1.exitMiniProgram();
          }
        }
      });
    } else {
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
                });
                utils_common.commonutils.GetUserInfo().then((data2) => {
                  if (!data2.Success) {
                    turntable.turntableApi.saveUserInfo(
                      that.openId,
                      "",
                      "点上花"
                    );
                  }
                });
                turntable.turntableApi.GetPrizeConfigList(that.businessId).then(
                  (data2) => {
                    console.log(data2);
                    if (!data2.Success) {
                      common_vendor.index.showModal({
                        title: "温馨提示",
                        content: data2.Message,
                        showCancel: false,
                        success: function(res2) {
                          if (res2.confirm) {
                            common_vendor.index.$u.route(
                              "/pages/home/home",
                              ""
                            );
                          }
                        }
                      });
                    }
                    that.prizeList = data2.Data;
                  }
                );
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
    }
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    befoterClick(data) {
      turntable.turntableApi.DrawLottery(this.businessId, this.openId).then((drawData) => {
        console.log(drawData);
        if (drawData.Success) {
          var Id = drawData.Data.Id;
          for (var i = 0; i < this.prizeList.length; i++) {
            if (this.prizeList[i].Id == Id) {
              this.targetIndex = i;
            }
          }
          if (data.type == "start") {
            data.callback && data.callback(this.targetIndex);
          }
        } else {
          if (data.type == "start") {
            this.targetIndex = 5;
            data.callback && data.callback(this.targetIndex);
          }
        }
      }).catch((error) => {
        utils_common.commonutils.showToast(error, "error");
      });
    },
    //转盘结束后
    afterClick(data) {
      if (data.type == "end") {
        data.callback && data.callback();
        console.log(data.content);
        turntable.turntableApi.SaveWheelLottery(this.openId, this.businessId, data.content.Id).then((saveres) => {
          common_vendor.index.$u.route("/pages/home/home", data.content);
        });
      }
    },
    handleClose() {
      this.userInfoDialog = false;
    }
  }
};
if (!Array) {
  const _easycom_my_turntable_draw2 = common_vendor.resolveComponent("my-turntable-draw");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_set_avatar_dialog2 = common_vendor.resolveComponent("set-avatar-dialog");
  (_easycom_my_turntable_draw2 + _easycom_bottom_support_info2 + _easycom_set_avatar_dialog2)();
}
const _easycom_my_turntable_draw = () => "../../components/my-turntable-draw/my-turntable-draw.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_set_avatar_dialog = () => "../../components/set-avatar-dialog/set-avatar-dialog.js";
if (!Math) {
  (_easycom_my_turntable_draw + _easycom_bottom_support_info + _easycom_set_avatar_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: "overflow:" + (_ctx.show ? "hidden" : "auto"),
    b: common_vendor.t($data.businessInfo.BnsinessName),
    c: common_vendor.sr("raffleWheel", "3f82645e-0"),
    d: common_vendor.o($options.befoterClick),
    e: common_vendor.o($options.afterClick),
    f: common_vendor.p({
      prizeList: $data.prizeList,
      targetIndex: $data.targetIndex
    }),
    g: common_vendor.o($options.handleClose),
    h: common_vendor.p({
      show: $data.userInfoDialog
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f82645e"]]);
wx.createPage(MiniProgramPage);
